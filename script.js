document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
    });
});


const aboutMe = document.querySelector('.about-me');

// Automatically show the image and text when the page loads
window.addEventListener('load', () => {
    aboutMe.classList.add('show');
});


document.getElementById("certificate-button").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});


// video
document.getElementById("portfolio-button").addEventListener("click", function() {
    document.getElementById("popupVID").style.display = "flex";
});

document.getElementById("close-button-portfolio").addEventListener("click", function() {
    document.getElementById("popupVID").style.display = "none";
    
});


// Open the "Contact Me" pop-up
document.getElementById("contact-button").addEventListener("click", function() {
    document.getElementById("popupContact").style.display = "flex";
});

// Close the "Contact Me" pop-up
document.getElementById("close-button-contact").addEventListener("click", function() {
    document.getElementById("popupContact").style.display = "none";
});

