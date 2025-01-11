const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
});


document.getElementById("menuToggle").addEventListener("click", function () {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
});
