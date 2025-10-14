let questions = [];
let current = 0;
let score = 0;

async function loadQuestions() {
  const res = await fetch("/api/questions");
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => submitAnswer(q.id, opt);
    optionsDiv.appendChild(btn);
  });
}

async function submitAnswer(id, answer) {
  const res = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, answer }),
  });
  const data = await res.json();
  document.getElementById("feedback").textContent = data.message;

  if (data.correct) score++;

  document.getElementById("score").textContent = `Score: ${score}`;
}

document.getElementById("next-btn").onclick = () => {
  if (current < questions.length - 1) {
    current++;
    document.getElementById("feedback").textContent = "";
    showQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>🏁 Quiz Finished!</h2>
      <p>Your final score is ${score}/${questions.length}</p>
    `;
  }
};

loadQuestions();
