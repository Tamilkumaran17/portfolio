const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Event listener for theme toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});
