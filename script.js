document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("nav ul li[data-target]");
  const buttons = document.querySelectorAll(".btn");
  const sections = document.querySelectorAll("main > section");
  const searchInput = document.getElementById("projectSearch");
  const projectList = document.querySelectorAll(".project-list li");
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");

  function showSection(id) {
    sections.forEach(section => {
      section.classList.toggle("active", section.id === id);
    });
    navItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-target") === id);
    });
  }

  showSection("home");
  
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      showSection(targetId);

      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
      }
    });
  });

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (button.classList.contains("about")) {
        showSection("about");
      } else if (button.classList.contains("portfolio")) {
        showSection("portfolio");
      }
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
      }
    });
  });

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(filter) ? "block" : "none";
    });
  });
}

const canvas = document.getElementById('neonRain');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const neonLines = [];
const neonColors = ['#3caeff', '#ff3caa', '#00ff99', '#fffa00'];

for (let i = 0; i < 150; i++) {
  neonLines.push({
    x: Math.random() * w,
    y: Math.random() * h,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 2,
    color: neonColors[Math.floor(Math.random() * neonColors.length)],
    width: Math.random() * 2 + 1
  });
}

function animateNeonRain() {
  ctx.clearRect(0, 0, w, h);

  neonLines.forEach(line => {
    ctx.beginPath();
    ctx.strokeStyle = line.color;
    ctx.lineWidth = line.width;
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x, line.y + line.length);
    ctx.stroke();

    line.y += line.speed;

    if (line.y > h) {
      line.y = -line.length;
      line.x = Math.random() * w;
      line.color = neonColors[Math.floor(Math.random() * neonColors.length)];
      line.width = Math.random() * 2 + 1;
    }
  });

  requestAnimationFrame(animateNeonRain);
}

animateNeonRain();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});