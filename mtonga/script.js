// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

//Function for sending email message
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("XyqCn7c9cpg026xpR"); // Replace YOUR_PUBLIC_KEY with your EmailJS public key

  // Select the form
  const contactForm = document.querySelector("form");

  // Add submit event listener
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };


// Function to show the custom alert
function showCustomAlert(message) {
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");
  const okButton = document.getElementById("alert-ok-btn");

  // Set the message
  alertMessage.textContent = message;

  // Show the alert
  alertBox.classList.remove("hidden");

  // Close the alert on clicking OK
  okButton.onclick = () => {
    alertBox.classList.add("hidden");
  };
}

// Using the custom alert in your EmailJS logic
emailjs
  .send("service_2gnvxfc", "template_yioictw", formData)
  .then(
    (response) => {
      showCustomAlert(
        "Thank you for reaching out! Your message has been sent successfully. Please click OK to proceed. I’ll review your message and get back to you as soon as possible. Have a great day!"
      );
      contactForm.reset(); // Clear the form
    },
    (error) => {
      showCustomAlert(
        "Unfortunately, your message could not be sent at this time. Please click OK to try again later. I apologize for the inconvenience."
      );
      console.error("Error:", error);
    }
  );


  });
});


