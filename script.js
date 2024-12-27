// Social Media Link Click Event
document.querySelectorAll('.social-media a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const platform = e.target.getAttribute('href'); 
    alert(`You're being redirected to ${platform}.`);
  });
});

// Responsive Navigation Menu
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

// Scroll to top functionality (Optional)
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openNav() {
  document.getElementById("sidemenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
}
