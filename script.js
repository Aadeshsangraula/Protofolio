

// TICKER OPTIMIZATION
function optimizeTrack() {
    const track = document.querySelector('.track');
    const groups = document.querySelectorAll('.group');
    if (groups.length > 0) track.style.width = (groups[0].offsetWidth * 2) + 'px';
}
window.addEventListener('load', optimizeTrack);
window.addEventListener('resize', optimizeTrack);

// EMAILJS SETUP
// EMAILJS SETUP
emailjs.init("D1oslzmJLzK07qjUx"); // e.g., "aBcdEFg123456"
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    const btn = document.querySelector(".p-btn");
    const services =[...document.querySelectorAll('input[name="service"]:checked')].map(cb => cb.value).join(", ") || "None selected";
    
    btn.textContent = "Sending...";
    btn.disabled = true;
    
    // Replace the next line with your Service ID and Template ID
    emailjs.send("service_bbums6w", "template_1mj9unj", {
        name: this.name.value, 
        email: this.email.value,
        message: this.message.value, 
        services: services
    })
    .then(() => { 
        status.textContent = "✅ Message sent successfully!"; 
        status.style.color = "#0f766e"; 
        this.reset(); 
    })
    .catch((err) => { 
        console.error("EmailJS Error:", err); // This helps debug if it fails again
        status.textContent = "Error! Please try again."; 
        status.style.color = "#c62828"; 
    })
    .finally(() => { 
        btn.textContent = "Send Message"; 
        btn.disabled = false; 
    });
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

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

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});

// PROFESSIONAL SCROLL REVEAL ANIMATIONS
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers animation when 15% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); 
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
