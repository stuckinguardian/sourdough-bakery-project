// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Daily Special Rotation (sourdough focused)
const dailySpecials = [
    "Classic Country Sourdough - Baked Every 4 Hours",
    "Fresh Rosemary Olive Oil Loaves - Just Out of the Oven",
    "Cranberry Walnut Sourdough - Limited Daily Batch",
    "Warm Sourdough Baguettes - Perfect for Tonight's Dinner"
];

function rotateDailySpecial() {
    const specialElement = document.querySelector('.daily-special p');
    if (specialElement) {
        const currentIndex = dailySpecials.indexOf(specialElement.textContent);
        const nextIndex = (currentIndex + 1) % dailySpecials.length;
        specialElement.textContent = dailySpecials[nextIndex];
    }
}

// Rotate special every 10 seconds (for demo purposes)
setInterval(rotateDailySpecial, 10000);

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});