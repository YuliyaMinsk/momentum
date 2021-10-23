import './sass/style.scss';

import { runSlider } from './ts/slider';
import { runTimer } from './ts/timer';
import { runGreeting } from './ts/greeting';
import { runWeather } from './ts/weather';

// window.onload = function () {
//   document.body.classList.add('loaded_hiding');
//   window.setTimeout(function () {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//   }, 500);
// }

// Run start blocks
runSlider();
runTimer();
runGreeting();
runWeather();


