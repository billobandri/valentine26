const startDate = new Date("April 6, 2025");
const today = new Date();

const diffTime = today - startDate;
const daysTogether = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").textContent = daysTogether + " days";

// 490 year promise
const totalPromiseDays = 490 * 365;
const remainingDays = totalPromiseDays - daysTogether;

const yearsLeft = Math.floor(remainingDays / 365);
const daysLeftAfterYears = remainingDays % 365;

document.getElementById("daysLeft").textContent =
  yearsLeft + " years & " + daysLeftAfterYears + " days";

// 3D Tilt Effect
document.querySelectorAll(".comet-card").forEach((card) => {
  const inner = card.querySelector(".card-inner");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

const track = document.querySelector(".carousel-track");

let scrollAmount = 0;
let speed = 0.5; // smaller = slower

function autoScroll() {
  scrollAmount += speed;
  track.style.transform = `translateX(-${scrollAmount}px)`;

  // When first set is fully scrolled, reset smoothly
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();
