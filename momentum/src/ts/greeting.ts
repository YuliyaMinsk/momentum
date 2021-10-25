import i18next from './i18n.js';
import { getTimeOfDay } from './slider';

export function runGreeting() {
  const name = (<HTMLInputElement>document.querySelector('.name'));
  const nameSaved = loadName();

  if (nameSaved) name.value = nameSaved;

  name.addEventListener('input', function (event) {
    if (name.value) saveName(name.value);
  });

  showGreeting();
}

function showGreeting() {
  const greeting = document.querySelector('.greeting');
  const timeOfDay = getTimeOfDay();
  let greetingText: string;

  switch (timeOfDay) {
    case 'night': greetingText = i18next.t('greetings-night'); break;
    case 'morning': greetingText = i18next.t('greetings-morning'); break;
    case 'afternoon': greetingText = i18next.t('greetings-afternoon'); break;
    case 'evening': greetingText = i18next.t('greetings-evening'); break;
  }
  
  greeting.textContent = greetingText;
  window.setTimeout(showGreeting, 1000);
}

function saveName(name: string) {
  localStorage.setItem('name', name);
}

function loadName(): string {
  return localStorage.getItem('name');
}