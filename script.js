const words = [
  'AI Automation Engineer',
  'Data Engineer',
  'Machine Learning Engineer',
  'PySpark Developer',
  'Databricks Enthusiast',
  'Agentic AI Builder',
  'MBA AI & Data Science Student'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById('typing');

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const cards = document.querySelectorAll('.glass');

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.classList.add('show');
    }

  });

});

window.dispatchEvent(new Event('scroll'));
