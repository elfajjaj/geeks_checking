function playByCode(code) {
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const btn = document.querySelector(`.key[data-key="${code}"]`);
  if (!audio || !btn) return;

  audio.currentTime = 0;
  audio.play().catch(() => {});

  btn.classList.add("playing");
  clearTimeout(btn._t);
  btn._t = setTimeout(() => btn.classList.remove("playing"), 120);
}

window.addEventListener("keydown", (e) => {
  if (e.repeat) return; 
  const code = e.keyCode || e.which;
  playByCode(code);
});

const keys = document.querySelectorAll(".key");
keys.forEach((k) => {

    k.addEventListener("mousedown", () => {
    playByCode(k.dataset.key);
  });

  k.addEventListener("mouseover", (e) => {
    if (e.buttons === 1) playByCode(k.dataset.key);
  });

  k.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      playByCode(k.dataset.key);
    },
    { passive: false }
  );
});
