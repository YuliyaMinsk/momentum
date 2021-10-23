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
  const dateInTimer = document.querySelector('.date');

  const date = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' } as const;
  const currentDate = date.toLocaleDateString('ru-RU', dateOptions);

  dateInTimer.textContent = currentDate;
  window.setTimeout(showDate, 1000);
}