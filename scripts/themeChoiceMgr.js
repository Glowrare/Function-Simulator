let darkMode = localStorage.getItem('darkMode');

const toggleDarkMode = document.querySelector('.color-mode-toggler');
const toggleIcon = document.querySelector('.color-mode-toggler i');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
  toggleIcon.classList.add('fa-moon');
}

toggleDarkMode.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
    toggleIcon.classList.add('fa-moon');
  } else {
    disableDarkMode();
    toggleIcon.classList.remove('fa-moon');
  }
});
