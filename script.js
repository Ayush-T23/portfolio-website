const roles = [
    "AI Engineer",
    "Data Engineer",
    "PySpark Developer",
    "ML Engineer",
    "AI Automation Expert"
];

let roleIndex = 0;
let charIndex = 0;
let typing = true;

const typingText = document.querySelector(".typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (typing) {

        typingText.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            typing = false;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, typing ? 120 : 60);
}

typeEffect();
