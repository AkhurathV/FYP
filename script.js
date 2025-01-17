let currentSlide = 0;

function changeSlide(slideIndex) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    // Update slide position
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });

    currentSlide = slideIndex;
}

// Auto-slide functionality
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3; // Change 3 to the number of slides
    changeSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

// Dropdown functionality
function myFunction() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
};

// Page loaded event
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');
    // Additional interactive functionality can be added here
});