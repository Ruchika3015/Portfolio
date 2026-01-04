// TYPEWRITER (already had)
const texts = [
    "Still learning. Already building.",
    "Code is my way of thinking out loud.",
    "Learning one problem at a time."
];

let textIndex = 0;
let charIndex = 0;
const speed = 80;
const delay = 1500;
const changingText = document.getElementById("changing-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        changingText.textContent += texts[textIndex][charIndex];
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delay);
    }
}

function eraseText() {
    if (charIndex > 0) {
        changingText.textContent =
            texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// SCROLL REVEAL
const reveals = document.querySelectorAll(".card, .project-card, section");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("reveal", "active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
