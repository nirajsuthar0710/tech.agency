
// DEMO CONTACT SETTINGS
// Add a parent/guardian-approved business contact before publishing.
const BUSINESS_EMAIL = "contact@example.com";
const WHATSAPP_NUMBER = ""; // Country code + number, digits only. Example: 919876543210

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Footer year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Contact settings validation
function hasRealWhatsApp() {
  return /^\d{10,15}$/.test(WHATSAPP_NUMBER);
}

function hasRealEmail() {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS_EMAIL) &&
    BUSINESS_EMAIL !== "contact@example.com";
}

// Email display
const emailLink = document.getElementById("emailLink");
const emailDisplay = document.getElementById("emailDisplay");

if (emailLink && emailDisplay && hasRealEmail()) {
  emailLink.href = "mailto:" + BUSINESS_EMAIL;
  emailDisplay.textContent = BUSINESS_EMAIL;
}

// WhatsApp
const whatsappLink = document.getElementById("whatsappLink");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

function openWhatsApp(message) {
  if (!hasRealWhatsApp()) {
    alert("Demo mode: WhatsApp contact has not been configured.");
    return;
  }

  const url = "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

if (whatsappLink) {
  whatsappLink.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp("Hello TechStart Agency! I would like to know more about your services.");
  });
}

if (floatingWhatsapp) {
  floatingWhatsapp.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp("Hello TechStart Agency! I would like to discuss a project.");
  });
}

// Contact form
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please fill in all fields.";
      return;
    }

    if (!hasRealWhatsApp()) {
      formNote.textContent = "Demo mode: no message was sent or stored.";
      alert("This is a demo form. WhatsApp contact is not configured.");
      return;
    }

    const fullMessage =
      "Hello TechStart Agency!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Message: " + message;

    openWhatsApp(fullMessage);
  });
}
