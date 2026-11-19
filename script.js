

// DEMO CONTACT DETAILS
// Replace these only when you have an approved business contact.
const BUSINESS_EMAIL = "neerajsuthar661@gmail.com";
const WHATSAPP_NUMBER = "9982207159";

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Check whether demo contact details have been replaced
function hasRealWhatsApp() {
  return /^\d{10,15}$/.test(WHATSAPP_NUMBER) &&
    !WHATSAPP_NUMBER.includes("X");
}

function hasRealEmail() {
  return BUSINESS_EMAIL.includes("@") &&
    !BUSINESS_EMAIL.includes("YOUR_EMAIL");
}

// WhatsApp links
const whatsappLink = document.getElementById("whatsappLink");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

function openWhatsApp(message) {
  if (!hasRealWhatsApp()) {
    alert("This is a demo website. Add an approved WhatsApp number in script.js first.");
    return;
  }

  const url = "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

whatsappLink.addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Hello TechStart Agency! I would like to know more about your services.");
});

floatingWhatsapp.addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Hello TechStart Agency! I would like to discuss a project.");
});

// Email link
const emailLink = document.getElementById("emailLink");

emailLink.addEventListener("click", event => {
  if (!hasRealEmail()) {
    event.preventDefault();
    alert("This is a demo website. Add an approved business email in script.js first.");
    return;
  }

  emailLink.href = "mailto:" + BUSINESS_EMAIL;
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

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
    formNote.textContent = "Demo mode: add an approved WhatsApp number in script.js to enable sending.";
    alert("The contact form is in demo mode. No message has been sent or saved.");
    return;
  }

  const fullMessage =
    "Hello TechStart Agency!\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Message: " + message;

  openWhatsApp(fullMessage);
});

