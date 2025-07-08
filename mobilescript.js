
  // MOBILE VIEW 
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-item');

// Toggle sidebar on hamburger click
hamburger.addEventListener('click', () => {
  const isActive = sidebar.classList.toggle('active');
  document.body.classList.toggle('sidebar-open', isActive);
});

// Close sidebar when a nav item is clicked (only on mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    }
  });
});

// Close sidebar on page load (mobile only)
window.addEventListener('load', () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  }
});


