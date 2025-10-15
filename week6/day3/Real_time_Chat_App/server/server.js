const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serve static files
app.use(express.static(path.join(__dirname, "..", "public")));

const roomsState = new Map(); // room => Map(socketId -> {username})
const socketsToRoom = new Map(); // socketId => room

function getUsersInRoom(room) {
  const map = roomsState.get(room);
  if (!map) return [];
  return [...map.values()].map((u) => u.username);
}

io.on("connection", (socket) => {
  // client emits "joinRoom" with { username, room }
  socket.on("joinRoom", ({ username, room }) => {
    if (!username || !room) return;

    socket.join(room);
    socketsToRoom.set(socket.id, room);

    if (!roomsState.has(room)) roomsState.set(room, new Map());
    roomsState.get(room).set(socket.id, { username });

    // welcome to current user
    socket.emit("message", {
      from: "system",
      text: `welcome to ${room}, ${username}!`,
      ts: Date.now(),
    });

    // notify others
    socket.to(room).emit("message", {
      from: "system",
      text: `${username} joined the room.`,
      ts: Date.now(),
    });

    // update user list for everyone
    io.to(room).emit("roomUsers", {
      room,
      users: getUsersInRoom(room),
    });
  });

  // broadcast chat messages within a room
  socket.on("chatMessage", (text) => {
    const room = socketsToRoom.get(socket.id);
    if (!room) return;

    const user = roomsState.get(room)?.get(socket.id);
    if (!user) return;

    io.to(room).emit("message", {
      from: user.username,
      text,
      ts: Date.now(),
    });
  });

  socket.on("disconnect", () => {
    const room = socketsToRoom.get(socket.id);
    if (!room) return;

    const userMap = roomsState.get(room);
    const user = userMap?.get(socket.id);
    if (user) {
      userMap.delete(socket.id);
      if (userMap.size === 0) roomsState.delete(room);

      socket.to(room).emit("message", {
        from: "system",
        text: `${user.username} left the room.`,
        ts: Date.now(),
      });

      io.to(room).emit("roomUsers", {
        room,
        users: getUsersInRoom(room),
      });
    }
    socketsToRoom.delete(socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`🚀 server running at http://localhost:${PORT}`)
);
