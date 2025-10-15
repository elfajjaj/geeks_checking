const $ = (sel) => document.querySelector(sel);

const regForm = $("#regForm");
const regOut = $("#regOut");
regForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = $("#regUser").value.trim();
  const password = $("#regPass").value.trim();
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  regOut.textContent = await res.text();
});

const startForm = $("#startForm");
const startOut = $("#startOut");
startForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const p1 = $("#p1").value.trim();
  const p2 = $("#p2").value.trim();
  const obstacles = Number($("#obstacles").value);
  const res = await fetch("/api/game/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ p1, p2, obstacles }),
  });
  const data = await res.json();
  startOut.textContent = res.ok
    ? `GameId: ${data.gameId}`
    : JSON.stringify(data);
  if (res.ok) {
    window.location.href = `/board.html?gameId=${
      data.gameId
    }&viewer=${encodeURIComponent(p1)}`;
  }
});

const openForm = $("#openForm");
openForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const gid = $("#openGameId").value.trim();
  const viewer = $("#viewer").value.trim();
  window.location.href = `/board.html?gameId=${gid}&viewer=${encodeURIComponent(
    viewer
  )}`;
});
