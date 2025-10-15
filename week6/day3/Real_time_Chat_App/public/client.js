const params = new URLSearchParams(location.search);
const username = params.get("username")?.trim();
const room = params.get("room")?.trim();

if (!username || !room) location.href = "./index.html";

const socket = io();
const $roomName = document.getElementById("roomName");
const $users = document.getElementById("users");
const $messages = document.getElementById("messages");
const $form = document.getElementById("msgForm");
const $input = document.getElementById("msg");
const $ding = document.getElementById("ding");

$roomName.textContent = `#${room}`;

socket.emit("joinRoom", { username, room });

socket.on("roomUsers", ({ users }) => {
  $users.innerHTML = users.map((u) => `<li>${u}</li>`).join("");
});

socket.on("message", (msg) => {
  appendMessage(msg);
  notifyNewMessage(msg);
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = $input.value.trim();
  if (!text) return;
  socket.emit("chatMessage", text);
  $input.value = "";
  $input.focus();
});

function appendMessage({ from, text, ts }) {
  const li = document.createElement("li");
  const when = new Date(ts).toLocaleTimeString();
  li.className =
    from === "system" ? "msg system" : from === username ? "msg me" : "msg";
  li.innerHTML = `
    <div class="meta">
      <span class="from">${from}</span>
      <span class="time">${when}</span>
    </div>
    <div class="text">${escapeHtml(text)}</div>
  `;
  $messages.appendChild(li);
  $messages.scrollTop = $messages.scrollHeight;
}

function notifyNewMessage({ from }) {
  if (document.hidden && from !== "system") {
    $ding.currentTime = 0;
    $ding.play().catch(() => {});
    const old = document.title;
    document.title = "🔔 New message!";
    setTimeout(() => (document.title = old), 1200);
  }
}

function escapeHtml(s = "") {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );
}
