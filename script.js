const phrases = ["MIS Major", "Data Analyst", "Data Scientist", "Problem Solver"];
const typedText = document.querySelector(".typed-text");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseTime = 1500;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  } else {
    typedText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    if (currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
      return;
    }
  }
  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
  revealOnScroll(); // run once on load
});

// Scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
