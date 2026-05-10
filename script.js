const words = [
  "AI Automation Engineer",
  "Data Engineer",
  "Machine Learning Engineer",
  "PySpark Developer",
  "Databricks Enthusiast",
  "Agentic AI Builder",
  "MBA AI & Data Science Student"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

  currentWord = words[wordIndex];

  if (!isDeleting) {

    typingElement.textContent =
      currentWord.substring(0, letterIndex + 1);

    letterIndex++;

    if (letterIndex === currentWord.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1400);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, letterIndex - 1);

    letterIndex--;

    if (letterIndex === 0) {

      isDeleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 45 : 85);
}

typeEffect();



/* SCROLL ANIMATION */

const cards = document.querySelectorAll(".glass");


function revealCards() {

  cards.forEach((card, index) => {

    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {

      setTimeout(() => {
        card.classList.add("show");
      }, index * 80);

    }

  });

}

window.addEventListener("scroll", revealCards);

revealCards();
