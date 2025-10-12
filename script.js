// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
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
    }
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

// Enhanced header scroll effect with color transitions
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(102, 126, 234, 0.2)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(102, 126, 234, 0.1)';
    }
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('visible');
            
            // Add staggered animation for grid items
            if (entry.target.classList.contains('feature-card') || 
                entry.target.classList.contains('community-card')) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .community-card, .about-content, .section-header, .hero-content'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Enhanced code block typing animation with syntax highlighting effect
function typeCode() {
    const codeElement = document.querySelector('.code-content code');
    if (!codeElement) return;
    
    const codeLines = [
        '🎯 git clone https://github.com/your-dream-project.git',
        '📁 cd dream-project',
        '🔧 npm install magic',
        '🚀 npm run build-the-future',
        '✨ git commit -m "Changed the world! 🌍"',
        '🎉 git push origin amazing-features'
    ];
    
    codeElement.textContent = '';
    let currentLine = 0;
    let currentChar = 0;
    
    function typeChar() {
        if (currentLine < codeLines.length) {
            if (currentChar < codeLines[currentLine].length) {
                codeElement.textContent += codeLines[currentLine].charAt(currentChar);
                currentChar++;
                setTimeout(typeChar, 50);
            } else {
                // Move to next line
                codeElement.textContent += '\n';
                currentLine++;
                currentChar = 0;
                setTimeout(typeChar, 300); // Pause between lines
            }
        } else {
            // Add cursor blink effect
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            cursor.style.color = '#4facfe';
            codeElement.appendChild(cursor);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(typeChar, 1500);
}

// Add CSS for cursor blink
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', typeCode);

// Parallax effect for floating elements
function initParallax() {
    const floatingElements = document.querySelectorAll('.float-icon');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Initialize parallax on load
document.addEventListener('DOMContentLoaded', initParallax);

// Add sparkle effect on hover for buttons
function addSparkleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            createSparkles(e.target);
        });
    });
}

function createSparkles(element) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = '#fff';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
        sparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
        
        document.body.appendChild(sparkle);
        
        // Animate sparkle
        sparkle.animate([
            { transform: 'scale(0) rotate(0deg)', opacity: 1 },
            { transform: 'scale(1) rotate(180deg)', opacity: 0.5 },
            { transform: 'scale(0) rotate(360deg)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Initialize sparkle effects
document.addEventListener('DOMContentLoaded', addSparkleEffect);

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const targets = ['100M+', '420M+', '99.9%'];
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, targets[index]);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = Date.now();
    const isPercent = target.includes('%');
    const hasPlus = target.includes('+');
    const numericValue = parseFloat(target.replace(/[^\d.]/g, ''));
    
    function updateCounter() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = progress * numericValue;
        let displayValue = Math.floor(current);
        
        if (isPercent) {
            element.textContent = `${displayValue}%`;
        } else {
            if (displayValue >= 1000) {
                displayValue = Math.floor(displayValue / 1000);
                element.textContent = `${displayValue}M${hasPlus ? '+' : ''}`;
            } else {
                element.textContent = `${displayValue}${hasPlus ? '+' : ''}`;
            }
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', animateCounters);

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konami.length && konamiCode.every((code, index) => code === konami[index])) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add rainbow effect to the page
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    // Show a fun message
    const message = document.createElement('div');
    message.textContent = '🎉 You found the secret! Welcome to the GitHub Matrix! 🌈';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
        padding: 2rem;
        border-radius: 15px;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

// Add rainbow animation CSS
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Console greeting with ASCII art
console.log(`
    🚀✨🌟 WELCOME TO GITHUB'S MAGICAL WORLD! 🌟✨🚀
    
         .-""""""""""""""""""""""-.
       .'                          '.
      /   🎯 WHERE CODE DREAMS      \\
     ;         COME TRUE! 💫         ;
     |                              |
     |    Built with ❤️ using:      |
     |    🌐 HTML5 + CSS3 + JS      |
     |    🎨 Gradients & Animations |
     |    ✨ Love & Magic           |
     ;                              ;
      \\     Ready to build the     /
       '.     future together?   .'
         '-.......................-'
    
    🔍 Try the Konami code: ↑↑↓↓←→←→BA
    🎪 Hover over buttons for sparkles!
    📱 Fully responsive design
    🌈 Easter eggs hidden everywhere
    
    Happy coding! 🎉
`);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Any additional scroll-based animations can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);