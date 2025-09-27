async function loadGame() {
  const res = await fetch("/game");
  const data = await res.json();

  const gameDiv = document.getElementById("game");
  gameDiv.innerHTML = `
    <h2>${data.emoji}</h2>
    ${data.options
      .map(
        (opt) =>
          `<button onclick="submitGuess('${opt}','${data.correct}')">${opt}</button>`
      )
      .join("")}
  `;
}

async function submitGuess(guess, correct) {
  const res = await fetch("/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guess, correct }),
  });
  const result = await res.json();

  document.getElementById("feedback").textContent =
    result.message + " | Score: " + result.score;

  loadLeaderboard();
  setTimeout(loadGame, 1000); 
}

async function loadLeaderboard() {
  const res = await fetch("/leaderboard");
  const scores = await res.json();

  document.getElementById("leaderboard").innerHTML = scores
    .map((s, i) => `<li>#${i + 1}: ${s}</li>`)
    .join("");
}

loadGame();
