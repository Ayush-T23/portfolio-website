const roles = [
  "AI Engineer",
  "Data Engineer",
  "PySpark Developer",
  "ML Engineer",
  "AI Automation Expert"
];

const typingText = document.querySelector(".typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent =
      currentRole.substring(0, charIndex--);
  } else {
    typingText.textContent =
      currentRole.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 110;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
