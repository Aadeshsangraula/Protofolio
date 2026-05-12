// ===============================
// TICKER OPTIMIZATION
// ===============================
function optimizeTrack() {
    const track = document.querySelector(".track");
    const groups = document.querySelectorAll(".group");

    if (track && groups.length > 0) {
        track.style.width = (groups[0].offsetWidth * 2) + "px";
    }
}

window.addEventListener("load", optimizeTrack);
window.addEventListener("resize", optimizeTrack);


// ===============================
// EMAILJS SETUP
// ===============================

// Make sure EmailJS library is loaded in HTML:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

(function () {
    emailjs.init("D1oslzmJLzK07qjUx");
})();

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const status = document.getElementById("form-status");
        const btn = document.querySelector(".p-btn");

        const services = [
            ...document.querySelectorAll('input[name="service"]:checked')
        ]
            .map(cb => cb.value)
            .join(", ") || "None selected";

        // Safety check
        if (btn) {
            btn.textContent = "Sending...";
            btn.disabled = true;
        }

        emailjs.send("service_bbums6w", "template_1mj9unj", {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value,
            services: services
        })
            .then(() => {
                if (status) {
                    status.textContent = "✅ Message sent successfully!";
                    status.style.color = "#0f766e";
                }

                this.reset();
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);

                if (status) {
                    status.textContent = "❌ Error! Please try again.";
                    status.style.color = "#c62828";
                }
            })
            .finally(() => {
                if (btn) {
                    btn.textContent = "Send Message";
                    btn.disabled = false;
                }
            });
    });
}


// ===============================
// HAMBURGER MENU
// ===============================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            mobileMenu.classList.remove("open");
        });
    });
}


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.getElementById("navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
}


// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});


// ===============================
// DEBUG CHECKS
// ===============================
window.addEventListener("DOMContentLoaded", () => {
    console.log("✅ JavaScript Loaded Successfully");

    if (!document.getElementById("contact-form")) {
        console.warn("⚠ contact-form not found");
    }

    if (!document.getElementById("navbar")) {
        console.warn("⚠ navbar not found");
    }

    if (!document.getElementById("hamburger")) {
        console.warn("⚠ hamburger not found");
    }

    if (!document.getElementById("mobileMenu")) {
        console.warn("⚠ mobileMenu not found");
    }
});
