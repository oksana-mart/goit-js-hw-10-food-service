import menu from './menu.json';
import menuCardTemplate from './menu-card-template.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = menuCardTemplate(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

const body = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');

themeSwitcher.addEventListener('change', onThemeSwitcherChange);

function onThemeSwitcherChange(event) {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);
  if (body.classList.contains(Theme.DARK)) {
    localStorage.setItem('switcher-position', (Theme.DARK));
  } else localStorage.setItem('switcher-position', (Theme.LIGHT));
};

getTheme();

function getTheme() {
  const savedTheme = localStorage.getItem('switcher-position');

  if (savedTheme === Theme.DARK) {
    body.classList.add(savedTheme);
    themeSwitcher.setAttribute('checked', 'true');
  } else { body.classList.add(Theme.LIGHT); }
};