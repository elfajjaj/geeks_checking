let currentQuestion = 0;
let score = 0;
let questions = [];

async function loadQuestions() {
  const res = await fetch("/api/questions");
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (currentQuestion >= questions.length) {
    document.getElementById(
      "score"
    ).innerText = `🏆 Final Score: ${score}/${questions.length}`;
    document.getElementById("nextBtn").style.display = "none";
    return;
  }

  const q = questions[currentQuestion];
  const qTitle = document.createElement("h2");
  qTitle.innerText = q.question;
  quizDiv.appendChild(qTitle);

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(i, btn);
    quizDiv.appendChild(btn);
  });
}

function checkAnswer(i, btn) {
  const q = questions[currentQuestion];
  const options = document.querySelectorAll(".option");

  options.forEach((opt, idx) => {
    if (idx === q.correct) opt.classList.add("correct");
    else if (idx === i) opt.classList.add("wrong");
    opt.disabled = true;
  });

  if (i === q.correct) score++;
  document.getElementById("score").innerText = `Score: ${score}`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
});

loadQuestions();
