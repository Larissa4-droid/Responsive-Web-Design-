// Toggle mobile navigation
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  });
  
  // Simple form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all fields.');
    }
  });
  