export function runTimer() {
  showTime();
  showDate();
}

function showTime() {
  const timeInTimer = document.querySelector('.time');

  const date = new Date();
  const currentTime = date.toLocaleTimeString();

  timeInTimer.textContent = currentTime; 
  window.setTimeout(showTime, 1000);
}

function showDate() {
  updateDate();
  window.setTimeout(showDate, 1000);
}

export function updateDate() {
  const dateInTimer = document.querySelector('.date');

  const date = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' } as const;
  let currentDate;

  const language = String((<HTMLInputElement>document.querySelector('input[name="language"]:checked')).value);
  
  switch (language) {
    case 'ru': currentDate = date.toLocaleDateString('ru-RU', dateOptions); break;
    case 'en': currentDate = date.toLocaleDateString('en-US', dateOptions); break;
  }

  dateInTimer.textContent = currentDate;
}