import i18next from './i18n.js';
import { updateDate } from './timer';
import { runGreeting } from './greeting';
import { runWeather } from './weather';
import { getQuote } from './quote';

export function runSettings() {
  const languages = (document.querySelectorAll('input[name="language"]'));
  const settingsSaved = loadSettings();

  languages.forEach(language => language.addEventListener('change', function (event) {
    i18next.changeLanguage((<HTMLInputElement>document.querySelector('input[name="language"]:checked')).value);
    saveSettings();
    updateDate();
    runGreeting();
    runWeather();
    getQuote();

    loadDescriptions();
  }));  
}

function saveSettings() {
  localStorage.setItem('language', (<HTMLInputElement>document.querySelector('input[name="language"]:checked')).value);
}

function loadSettings(): boolean {
  const languages = (document.querySelectorAll('input[name="language"]'));

  try { 
  document.forms[0]["language"].value = localStorage.getItem('language');
  loadDescriptions();

  return true;
  } catch (e) {
    document.forms[0]["language"].value = 'ru';
  }
}

function loadDescriptions() {
  document.querySelector('.language-description').textContent = i18next.t('language-description');
  i18next.changeLanguage((<HTMLInputElement>document.querySelector('input[name="language"]:checked')).value);
  (<HTMLInputElement>document.querySelector('.name')).placeholder = i18next.t('name-placeholder');
}

export function openSettings() {
  const settingsForm = document.querySelector('.settings-form');

  (<HTMLElement>settingsForm).style.transition = 'opacity 1s ease-out';

  if (settingsForm.classList.contains('opened')) {
    settingsForm.classList.remove('opened');
  } else {
    settingsForm.classList.add('opened');
  }
}