// Global Gmail opener
function openGmail() {
  const email = "pratgrahi.10@gmail.com";
  const subject = "Let's Connect!";
  const body = "Hi Pratima, I saw your portfolio and wanted to reach out.";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');
  const aboutToggleButtons = document.querySelectorAll('.about-btn-toggle');
  const aboutSections = document.querySelectorAll('.about-section');
  const mainContent = document.querySelector('.main-content');

  // Reset all about subsections and toggle buttons
  function resetAboutSubsections() {
    aboutSections.forEach(section => section.classList.remove('active-toggle'));
    aboutToggleButtons.forEach(button => button.classList.remove('active'));
  }

  // Show a specific section by ID
  function showSection(id) {
    if (id !== 'about') resetAboutSubsections();

    contentSections.forEach(section => {
      section.classList.remove('active-section');
    });

    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active-section');

    }

    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === id);
    });
  }

  // Navigation item click handling
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = item.dataset.section;
      if (targetSection) {
        showSection(targetSection);
      }
    });
  });

  // About toggle buttons handling
  aboutToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.toggle;
      const targetSection = document.getElementById(targetId);
      const isVisible = targetSection.classList.contains('active-toggle');

      resetAboutSubsections();

      if (!isVisible && targetSection) {
        targetSection.classList.add('active-toggle');
        btn.classList.add('active');
      }
    });
  });

  // Optional scroll-based section detection (if needed)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.dataset.section === id);
        });
      }
    });
  }, {
    root: mainContent,
    threshold: 0.5,
  });

  // Observe each section
  contentSections.forEach(section => observer.observe(section));

  // Back to Intro buttons (if used)
  document.querySelectorAll('.back-to-intro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;
      if (target) showSection(target);
    });
  });

  // Load initial hero section
  showSection('hero');
});

document.querySelectorAll('.project-clickable').forEach(card => {
  card.addEventListener('click', function (e) {
    // Prevent navigation if the user clicks on the Source Code link itself
    if (!e.target.classList.contains('source-link')) {
      const link = this.getAttribute('data-link');
      window.open(link, '_blank');
    }
  });
});




