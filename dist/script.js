document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: "slide",
        once: true,
    });
    
    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#4a5568"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#4a5568",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    const lightIcon = document.getElementById("theme-toggle-light-icon");
    const darkIcon = document.getElementById("theme-toggle-dark-icon");

    const mobileThemeToggleBtn = document.getElementById("mobile-theme-toggle");
    const mobileLightIcon = document.getElementById("mobile-theme-toggle-light-icon");
    const mobileDarkIcon = document.getElementById("mobile-theme-toggle-dark-icon");

    // Function to toggle theme
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("color-theme", "dark");
            // Update desktop icons
            darkIcon.classList.remove("hidden");
            lightIcon.classList.add("hidden");
            // Update mobile icons
            mobileDarkIcon.classList.remove("hidden");
            mobileLightIcon.classList.add("hidden");
        } else {
            localStorage.setItem("color-theme", "light");
            // Update desktop icons
            lightIcon.classList.remove("hidden");
            darkIcon.classList.add("hidden");
            // Update mobile icons
            mobileLightIcon.classList.remove("hidden");
            mobileDarkIcon.classList.add("hidden");
        }
    };

    // Initialize theme on load
    const storedTheme = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
        // Update desktop icons
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
        // Update mobile icons
        mobileDarkIcon.classList.remove("hidden");
        mobileLightIcon.classList.add("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        // Update desktop icons
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
        // Update mobile icons
        mobileLightIcon.classList.remove("hidden");
        mobileDarkIcon.classList.add("hidden");
    }

    // Event listeners for theme toggles
    themeToggleBtn.addEventListener("click", toggleTheme);
    mobileThemeToggleBtn.addEventListener("click", toggleTheme);

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenuButton.classList.toggle("open");
    });

    // Close mobile menu when clicking outside
    window.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add("hidden");
            mobileMenuButton.classList.remove("open");
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Here you can integrate with a backend service or email API
            // For this template, we'll just display a success message
            contactForm.reset();
            if (formMessage) {
                formMessage.classList.remove("hidden");
                setTimeout(() => {
                    formMessage.classList.add("hidden");
                }, 5000);
            }
        });
    }

    // Load particles.js (removed redundant call)
    // particlesJS.load('particles-js', 'path/to/particles.json', function() {
    //     console.log('particles.js loaded');
    // });
});