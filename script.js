// ==================== PARTICLE ANIMATION (Canvas) ====================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random();
    }

    update() {
        this.y -= this.speedY;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
const particlesArray = [];
const numberOfParticles = 100;

for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
}

// Animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// ==================== HERO 3D MOUSE EFFECT ====================
const heroName = document.querySelector('.hero-name');

heroName.addEventListener('mousemove', (e) => {
    const rect = heroName.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    heroName.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

heroName.addEventListener('mouseleave', () => {
    heroName.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// ==================== SMOOTH SCROLL ====================
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

// ==================== SCROLL ANIMATIONS (Intersection Observer) ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// ==================== SKILL ORB INTERACTIONS ====================
document.querySelectorAll('.skill-orb').forEach(orb => {
    const skillName = orb.getAttribute('data-skill');
    const skillLevel = orb.getAttribute('data-level');
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.textContent = `${skillName}: ${skillLevel}%`;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.9rem;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
        white-space: nowrap;
    `;
    document.body.appendChild(tooltip);
    
    orb.addEventListener('mouseenter', (e) => {
        tooltip.style.opacity = '1';
    });
    
    orb.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY + 10 + 'px';
    });
    
    orb.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});

// ==================== PROJECT CARD FLIP ====================
document.querySelectorAll('.project-card').forEach(card => {
    const flipButtons = card.querySelectorAll('.flip-btn');
    
    flipButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

// Add 3D tilt effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        if (!card.classList.contains('flipped')) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('flipped')) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        }
    });
});

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('.submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Simulate sending (replace with your actual backend endpoint)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success
    alert(`Thanks ${data.name}! Your message has been sent. I'll get back to you soon!`);
    
    // Reset form
    contactForm.reset();
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    submitBtn.disabled = false;
    
    // TODO: Replace alert with a nice modal or toast notification
    // TODO: Connect to actual backend/email service (EmailJS, Formspree, etc.)
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ==================== TYPING EFFECT (Optional - for hero) ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to use typing effect on tagline
// const tagline = document.querySelector('.hero-tagline');
// typeWriter(tagline, 'Student Developer & AI Enthusiast', 100);

// ==================== CURSOR FOLLOW EFFECT (Optional) ====================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #667eea;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    display: none; /* Enable if you want custom cursor */
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.display = 'block';
});

// ==================== SECTION PROGRESS INDICATOR ====================
function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.getElementById('progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);

// ==================== LAZY LOAD IMAGES (if you add images) ====================
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ==================== THEME TOGGLE (Optional - Dark/Light mode) ====================
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = '🌙';
    toggle.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
        transition: transform 0.3s;
        display: none; /* Enable if you want theme toggle */
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        toggle.innerHTML = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
    
    toggle.addEventListener('mouseenter', () => {
        toggle.style.transform = 'scale(1.1) rotate(20deg)';
    });
    
    toggle.addEventListener('mouseleave', () => {
        toggle.style.transform = 'scale(1) rotate(0deg)';
    });
    
    document.body.appendChild(toggle);
}

// Uncomment to enable theme toggle
// createThemeToggle();

// ==================== EASTER EGG: KONAMI CODE ====================
let konamiCode = [];
const correctCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === correctCode.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = 'none';
        }, 5000);
    }
});

// Add rainbow animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #764ba2;');
console.log('%cIf you\'re looking at this, we should probably talk. 😊', 'font-size: 12px; color: #999;');
console.log('%c📧 Email: anagha.kaloge@example.com', 'font-size: 12px; color: #999;');

// ==================== PERFORMANCE MONITORING ====================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}

// ==================== INITIALIZATION ====================
console.log('🚀 Portfolio initialized successfully!');

// Preload animations
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
});