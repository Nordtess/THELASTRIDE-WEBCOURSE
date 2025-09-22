// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarUl = document.getElementById('navbar-ul');
    
    hamburgerBtn.addEventListener('click', function() {
        // Toggle the open class on both button and menu
        hamburgerBtn.classList.toggle('open');
        navbarUl.classList.toggle('open');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#navbar-ul a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('open');
            navbarUl.classList.remove('open');
        });
    });
});