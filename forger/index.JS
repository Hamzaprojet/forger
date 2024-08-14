const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navigationMenu = document.getElementById('navbar-default');

mobileMenuButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('hidden');  // Toggles visibility using classList
});

const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();  // Prevents default page jump
    const targetSection = document.getElementById(this.getAttribute('href').substring(1));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});




  