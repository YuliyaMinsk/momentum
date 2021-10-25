import './sass/style.scss';

import { runSettings, openSettings } from './ts/settings';
import { runSlider } from './ts/slider';
import { runTimer } from './ts/timer';
import { runGreeting } from './ts/greeting';
import { runWeather } from './ts/weather';
import { getQuote } from './ts/quote';
import { showEstimate} from './ts/estimate';

// Run start blocks
runSettings();
runSlider();
runTimer();
runGreeting();
runWeather();
getQuote();
showEstimate();

document.querySelector('.change-quote').addEventListener('click', function (event) {
  getQuote();
});

document.querySelector('.settings-icon').addEventListener('click', function (event) {
  openSettings();
});

