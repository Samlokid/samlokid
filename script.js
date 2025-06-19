document.addEventListener('DOMContentLoaded', () => {
  // Toggle dark/light
  document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
document.getElementById("langToggle").addEventListener("click", () => {
  const isEnglish = document.documentElement.lang === "en";
  const newLang = isEnglish ? "es" : "en";
  document.documentElement.lang = newLang;
  document.getElementById("langToggle").textContent = isEnglish ? "English" : "Español";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${newLang}`);
  });
});

  // Text Sphere
  const canvas = document.getElementById("sphere-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 200;

  const words = "Santiago Morínigo ".repeat(3).trim().split(" ");
  const radius = 80;
  const angleStep = (Math.PI * 2) / words.length;
  let angle = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    words.forEach((word, i) => {
      const a = angle + angleStep * i;
      const x = canvas.width / 2 + radius * Math.cos(a);
      const y = canvas.height / 2 + radius * Math.sin(a);
      ctx.fillStyle = "#0ff";
      ctx.font = "14px Courier New";
      ctx.fillText(word, x - ctx.measureText(word).width / 2, y);
    });
    angle += 0.01;
    requestAnimationFrame(draw);
  }
  draw();
});
