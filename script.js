// JavaScript functionality to toggle the accordion-style sections
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to the navigation links
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = document.querySelectorAll(".accordion-section");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var _a;
            event.preventDefault();
            // Get the target section id from the link href
            var targetId = (_a = link.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.substring(1);
            var targetSection = document.getElementById(targetId);
            // Toggle the 'open' class to show/hide the section
            sections.forEach(function (section) {
                if (section === targetSection) {
                    section.classList.toggle("open");
                }
                else {
                    section.classList.remove("open");
                }
            });
        });
    });
});
