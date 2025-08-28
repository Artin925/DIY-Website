// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navbar = document.querySelector('.navbar');

    // Mobile Menu Toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background when scrolled
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Smooth scrolling for anchor links
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

    // Auto-play video with better mobile support
    const demoVideo = document.querySelector('.demo-video');
    if (demoVideo) {
        // Ensure video plays on mobile devices
        demoVideo.addEventListener('loadeddata', function() {
            if (demoVideo.readyState >= 2) {
                demoVideo.play().catch(function(error) {
                    console.log('Auto-play prevented:', error);
                    // Show play button overlay if autoplay fails
                    const overlay = document.querySelector('.video-overlay');
                    if (overlay) {
                        overlay.style.opacity = '1';
                    }
                });
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .hardware-card, .phase-card, .model-card, .spec-group');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        updateCounter();
    }

    // Animate stats when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('€')) {
                        const number = parseInt(text.replace(/[^0-9]/g, ''));
                        stat.textContent = '€0';
                        setTimeout(() => {
                            animateCounter(stat, number);
                            setTimeout(() => {
                                stat.textContent = `~€${number}`;
                            }, 2000);
                        }, 500);
                    }
                });
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Video interaction enhancements
    const videoWrapper = document.querySelector('.demo-video-wrapper');
    if (videoWrapper) {
        videoWrapper.addEventListener('click', function() {
            toggleVideo();
        });
        
        // Hide overlay when video is playing
        const video = document.querySelector('.demo-video');
        if (video) {
            video.addEventListener('play', function() {
                const overlay = document.querySelector('.video-overlay');
                if (overlay) {
                    overlay.style.opacity = '0';
                }
            });
            
            video.addEventListener('pause', function() {
                const overlay = document.querySelector('.video-overlay');
                if (overlay) {
                    overlay.style.opacity = '1';
                }
            });
        }
    }

    // Video toggle functionality
    window.toggleVideo = function() {
        const video = document.querySelector('.demo-video');
        const overlay = document.querySelector('.video-overlay');
        const playButton = document.querySelector('.play-button i');
        
        if (video) {
            if (video.paused) {
                video.play();
                playButton.className = 'fas fa-pause';
                overlay.style.opacity = '0';
            } else {
                video.pause();
                playButton.className = 'fas fa-play';
                overlay.style.opacity = '1';
            }
        }
    };

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Form interactions (if any forms are added later)
    function addFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        input.classList.add('error');
                        isValid = false;
                    } else {
                        input.classList.remove('error');
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    }

    addFormValidation();

    // Loading animation (if needed)
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Download functionality for 3D models
    window.downloadFile = function(filePath) {
        // Check if file exists (basic check)
        fetch(filePath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // File exists, trigger download
                    const link = document.createElement('a');
                    link.href = filePath;
                    link.download = filePath.split('/').pop();
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    // File doesn't exist, show message
                    alert('Diese STL-Datei ist noch nicht verfügbar. Bitte überprüfe den assets/3d-models Ordner.');
                }
            })
            .catch(() => {
                // Fallback for local files
                const link = document.createElement('a');
                link.href = filePath;
                link.download = filePath.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    };

    // Console message for developers
    console.log(`
    ╭─────────────────────────────────────╮
    │                                     │
    │     🤝 StatusBuddy Website v1.0     │
    │                                     │
    │     Ein DIY IoT High Five System    │
    │     für emotionale Verbindungen     │
    │                                     │
    │     © 2025 - Uni Projekt           │
    │                                     │
    ╰─────────────────────────────────────╯
    `);
});

// Additional CSS for animations via JavaScript
const additionalCSS = `
    /* Mobile Navigation Styles */
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
            height: calc(100vh - 70px);
            z-index: 999;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu li {
            margin: 1rem 0;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }

        body.nav-open {
            overflow: hidden;
        }
    }

    /* Navbar scroll effect */
    .navbar {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
    }

    /* Animation classes */
    .feature-card, .hardware-card, .phase-card, .model-card, .spec-group {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .feature-card.animate, .hardware-card.animate, .phase-card.animate, .model-card.animate, .spec-group.animate {
        opacity: 1;
        transform: translateY(0);
    }

    /* Ripple effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        margin-left: -10px;
        margin-top: -10px;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    /* Video animation */
    .demo-video {
        transition: all 0.3s ease;
    }

    .demo-video-wrapper:hover .demo-video {
        transform: scale(1.02);
    }

    /* Active nav link */
    .nav-menu a.active {
        color: var(--primary-blue);
    }

    .nav-menu a.active::after {
        width: 100%;
    }

    /* Loading state */
    body:not(.loaded) {
        opacity: 0;
    }

    body.loaded {
        opacity: 1;
        transition: opacity 0.5s ease;
    }

    /* Form error styles */
    input.error, textarea.error {
        border-color: var(--primary-red);
        background-color: rgba(229, 62, 62, 0.1);
    }

    /* Staggered animations */
    .feature-card:nth-child(1) { transition-delay: 0.1s; }
    .feature-card:nth-child(2) { transition-delay: 0.2s; }
    .feature-card:nth-child(3) { transition-delay: 0.3s; }

    .hardware-card:nth-child(1) { transition-delay: 0.1s; }
    .hardware-card:nth-child(2) { transition-delay: 0.2s; }
    .hardware-card:nth-child(3) { transition-delay: 0.3s; }
    .hardware-card:nth-child(4) { transition-delay: 0.4s; }

    .phase-card:nth-child(1) { transition-delay: 0.1s; }
    .phase-card:nth-child(2) { transition-delay: 0.2s; }
    .phase-card:nth-child(3) { transition-delay: 0.3s; }
    .phase-card:nth-child(4) { transition-delay: 0.4s; }
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
