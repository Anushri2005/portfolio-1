// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Modern navbar scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(30px)';
        navbar.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        navbar.style.transform = 'translateX(-50%) translateY(0)';
        navbar.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        navbar.style.transform = 'translateX(-50%) translateY(0)';
        navbar.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modern Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation delays for a more modern effect
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.filter = 'blur(0px)';
            }, index * 100);
        }
    });
}, observerOptions);

// Add modern animation styles to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .service-card, .timeline-item, .experience-item, .contact-item, .skill-item');
    
    animatedElements.forEach(el => {
        // Set initial state for modern animations
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.filter = 'blur(10px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});

// Enhanced typing animation with modern effects
function modernTypeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            // Add cursor effect
            if (i < text.length) {
                element.innerHTML += '<span class="typing-cursor">|</span>';
                setTimeout(() => {
                    element.innerHTML = element.innerHTML.replace('<span class="typing-cursor">|</span>', '');
                }, speed);
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Typing animation for home title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize modern typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const homeTitle = document.querySelector('.home-title');
    const originalText = homeTitle.textContent;
    
    // Add a slight delay before starting the animation
    setTimeout(() => {
        modernTypeWriter(homeTitle, originalText, 80);
    }, 800);
});

// EmailJS Configuration
(function() {
    emailjs.init("5-ovRoDbJx2sVAmdn");
})();

// Immediate button text fix
(function() {
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.textContent = 'Send Message';
        submitBtn.innerHTML = 'Send Message';
        submitBtn.style.color = 'white';
        submitBtn.style.fontWeight = '600';
        submitBtn.style.fontSize = '1rem';
        submitBtn.style.textAlign = 'center';
    }
})();

// Form submission handling with EmailJS
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure button is properly initialized
    if (submitBtn) {
        submitBtn.textContent = 'Send Message';
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
        submitBtn.style.color = 'white';
        submitBtn.style.fontWeight = '600';
    }
});

// Additional fallback to ensure button text is visible
window.addEventListener('load', function() {
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn && !submitBtn.textContent.trim()) {
        submitBtn.textContent = 'Send Message';
        submitBtn.innerHTML = 'Send Message';
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const fromName = formData.get('from_name');
        const fromEmail = formData.get('from_email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!fromName || !fromEmail || !subject || !message) {
            showFormStatus('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fromEmail)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        showLoadingState(true);
        hideFormStatus();
        
        // Prepare email parameters
        const templateParams = {
            from_name: fromName,
            from_email: fromEmail,
            subject: subject,
            message: message,
            to_name: 'Deepak G',
            reply_to: fromEmail
        };
        
        // Send email using EmailJS
        emailjs.send('service_5xy8lzu', 'template_cral7x9', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showFormStatus('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                showFormStatus('Sorry, there was an error sending your message. Please try again.', 'error');
            })
            .finally(function() {
                showLoadingState(false);
            });
    });
}

// Helper functions for form UI
function showLoadingState(show) {
    if (show) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
    } else {
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
    }
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            hideFormStatus();
        }, 5000);
    }
}

function hideFormStatus() {
    formStatus.style.display = 'none';
}

// Parallax effect for profile image
window.addEventListener('scroll', () => {
    const profileImage = document.querySelector('.profile-image');
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (profileImage) {
        profileImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click handlers for project links
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
           // e.preventDefault();
            // You can replace these with actual GitHub repository URLs
            //const projectName = link.closest('.project-card').querySelector('h3').textContent;
            //alert(`${projectName} - GitHub link will be added soon!`);
        });
    });
});

// Add click handlers for social links
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.querySelector('i').className;
            let url = '#';
            
            if (platform.includes('linkedin')) {
        // LinkedIn URL from your resume
        url = 'https://www.linkedin.com/in/anushrisreenivas/';
    } else if (platform.includes('github')) {
        // GitHub URL from your resume (Note: I've added the missing 'H' to match your profile)
        url = 'https://github.com/Anushri2005';
    }
            
            window.open(url, '_blank');
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove loading screen if it exists
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2563eb, #8b5cf6);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #2563eb';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
});

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
const debouncedScrollHandler = debounce(() => {
    // Scroll-dependent functions can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
