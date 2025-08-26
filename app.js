const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});


 function downloadResume() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1DchyQvkUBhhI8UVFhAMHeB7ZwRM7aofj";
  }