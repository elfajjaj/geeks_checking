const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

const users = new Map(); 
const sessions = new Map(); 

const SIZE = 10;
const BASE_A = { x: 0, y: 0 };
const BASE_B = { x: SIZE - 1, y: SIZE - 1 };
const DIRECTIONS = {
  up: { dx: 0, dy: -1 },
  down: { dx: 0, dy: 1 },
  left: { dx: -1, dy: 0 },
  right: { dx: 1, dy: 0 },
};

function makeEmptyGrid() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill("empty"));
}

function randomObstacles(count = 10) {
  const set = new Set();
  const forbidden = new Set([
    `${BASE_A.x},${BASE_A.y}`,
    `${BASE_B.x},${BASE_B.y}`,
  ]);
  while (set.size < count) {
    const x = Math.floor(Math.random() * SIZE);
    const y = Math.floor(Math.random() * SIZE);
    const key = `${x},${y}`;
    if (!forbidden.has(key)) set.add(key);
  }
  return [...set].map((k) => {
    const [x, y] = k.split(",").map(Number);
    return { x, y };
  });
}

function inBounds(x, y) {
  return x >= 0 && x < SIZE && y >= 0 && y < SIZE;
}

function adj(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) === 1;
}

function serializePublicState(state, viewer) {
  const { grid, p1, p2, turn, winner, gameId } = state;
  return {
    gameId,
    size: SIZE,
    turn, 
    you: viewer, 
    winner, 
    bases: { p1: BASE_A, p2: BASE_B },
    players: {
      p1: { x: p1.x, y: p1.y, username: p1.username },
      p2: { x: p2.x, y: p2.y, username: p2.username },
    },
    obstacles: state.obstacles,
    grid, 
  };
}

app.post("/api/register", (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return res.status(400).json({ error: "username and password required" });
  if (users.has(username))
    return res.status(409).json({ error: "username already exists" });
  users.set(username, { password });
  res.json({ ok: true });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  const rec = users.get(username);
  if (!rec || rec.password !== password)
    return res.status(401).json({ error: "invalid credentials" });
  res.json({ ok: true });
});


app.post("/api/game/start", (req, res) => {
  const { p1, p2, obstacles = 10 } = req.body || {};
  if (!p1 || !p2)
    return res.status(400).json({ error: "p1 and p2 usernames required" });
  if (!users.has(p1) || !users.has(p2))
    return res.status(400).json({ error: "players must be registered" });

  const gameId = Math.random().toString(36).slice(2, 9);

  const grid = makeEmptyGrid();
  grid[BASE_A.y][BASE_A.x] = "base-p1";
  grid[BASE_B.y][BASE_B.x] = "base-p2";

  const obs = randomObstacles(obstacles);
  for (const o of obs) grid[o.y][o.x] = "obstacle";

  const state = {
    gameId,
    grid,
    obstacles: obs,
    p1: { username: p1, x: BASE_A.x, y: BASE_A.y },
    p2: { username: p2, x: BASE_B.x, y: BASE_B.y },
    turn: "p1", 
    winner: null, 
  };

  sessions.set(gameId, state);
  return res.json({ gameId, state: serializePublicState(state, "p1") });
});


app.get("/api/game/:id/state", (req, res) => {
  const state = sessions.get(req.params.id);
  const viewer = req.query.viewer;
  if (!state) return res.status(404).json({ error: "game not found" });
  if (![state.p1.username, state.p2.username].includes(viewer)) {
    return res.status(403).json({ error: "viewer not in game" });
  }
  const role = viewer === state.p1.username ? "p1" : "p2";
  res.json(serializePublicState(state, role));
});


app.post("/api/game/:id/move", (req, res) => {
  const state = sessions.get(req.params.id);
  if (!state) return res.status(404).json({ error: "game not found" });
  if (state.winner)
    return res.status(200).json({ message: "game over", winner: state.winner });

  const { username, direction } = req.body || {};
  if (!username || !direction || !DIRECTIONS[direction])
    return res.status(400).json({ error: "invalid payload" });

  const role =
    username === state.p1.username
      ? "p1"
      : username === state.p2.username
      ? "p2"
      : null;
  if (!role) return res.status(403).json({ error: "user not in this game" });

  if (state.turn !== role)
    return res.status(409).json({ error: "not your turn", turn: state.turn });

  const actor = state[role];
  const { dx, dy } = DIRECTIONS[direction];
  const nx = actor.x + dx;
  const ny = actor.y + dy;

  if (!inBounds(nx, ny))
    return res.status(400).json({ error: "out of bounds" });
  const blocked = state.obstacles.some((o) => o.x === nx && o.y === ny);
  if (blocked) return res.status(400).json({ error: "blocked by obstacle" });

  actor.x = nx;
  actor.y = ny;

  const opponentRole = role === "p1" ? "p2" : "p1";
  const targetBase = opponentRole === "p1" ? BASE_A : BASE_B;
  if (actor.x === targetBase.x && actor.y === targetBase.y) {
    state.winner = role;
    return res.json({
      message: "captured base by standing on it",
      winner: role,
      state: serializePublicState(state, role),
    });
  }

  state.turn = opponentRole;
  return res.json({ ok: true, state: serializePublicState(state, role) });
});


app.post("/api/game/:id/attack", (req, res) => {
  const state = sessions.get(req.params.id);
  if (!state) return res.status(404).json({ error: "game not found" });
  if (state.winner)
    return res.status(200).json({ message: "game over", winner: state.winner });

  const { username } = req.body || {};
  const role =
    username === state.p1.username
      ? "p1"
      : username === state.p2.username
      ? "p2"
      : null;
  if (!role) return res.status(403).json({ error: "user not in this game" });
  if (state.turn !== role)
    return res.status(409).json({ error: "not your turn", turn: state.turn });

  const actor = state[role];
  const opponentRole = role === "p1" ? "p2" : "p1";
  const targetBase = opponentRole === "p1" ? BASE_A : BASE_B;

  if (!adj(actor, targetBase))
    return res.status(400).json({ error: "not adjacent to base" });

  state.winner = role;
  return res.json({
    message: "base destroyed by attack",
    winner: role,
    state: serializePublicState(state, role),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 API running at http://localhost:${PORT}`)
);
