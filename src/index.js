import menu from './menu.json';
import menuCardTemolate from './menu-card-template.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuCardsMarkup(menu) {
  return menuCardTemolate(menu);
};

const body = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');
body.classList.add("light-theme");

themeSwitcher.addEventListener('change', onThemeSwitcherChange);

function onThemeSwitcherChange(event) {
  const position = event.currentTarget.value;

  if (position) {
    body.classList.toggle(Theme.LIGHT);
    body.classList.toggle(Theme.DARK);
  };

  localStorage.setItem('switcher-position', (body.classList.value));
};

getTheme();

function getTheme() {
  const savedTheme = localStorage.getItem('switcher-position');

  if (savedTheme === Theme.DARK) {
    body.classList = savedTheme;
    themeSwitcher.setAttribute('checked', 'true');
  }
};