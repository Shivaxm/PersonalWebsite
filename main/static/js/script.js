// JavaScript to make the navbar hide on scroll down and show on scroll up
let lastScrollTop = 0; // This variable will hold the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-60px'; // Adjust this value based on the navbar's height
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
