// JavaScript functionality to toggle the accordion-style sections

document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to the navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".accordion-section");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        // Get the target section id from the link href
        const targetId = link.getAttribute("href")?.substring(1);
        const targetSection = document.getElementById(targetId!);
  
        // Toggle the 'open' class to show/hide the section
        sections.forEach((section) => {
          if (section === targetSection) {
            section.classList.toggle("open");
          } else {
            section.classList.remove("open");
          }
        });
      });
    });
  });
  