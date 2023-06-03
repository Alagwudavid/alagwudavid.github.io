const iframeMenu = document.querySelector('.br_ifm');
const iframeContainer = document.querySelector('.br_ifc');
const overlay = document.querySelector('.overlay');

iframeMenu.addEventListener('click', () => {
  iframeContainer.classList.toggle('show-iframe');
  overlay.classList.add('show-overlay');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('show-overlay');
    iframeContainer.classList.remove('show-iframe');
  });

  console.log(
    `You are running a development build`
  );


  const darkModeButton = document.getElementById('dark-mode-button');
const lightModeButton = document.getElementById('light-mode-button');
const body = document.body;

// Check if dark mode preference is saved in cookies
const darkModePreference = localStorage.getItem('darkMode');

// If dark mode preference exists in cookies, apply it
if (darkModePreference === 'true') {
  enableDarkMode();
}

darkModeButton.addEventListener('click', () => {
  enableDarkMode();
});

lightModeButton.addEventListener('click', () => {
  disableDarkMode();
});

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
}
