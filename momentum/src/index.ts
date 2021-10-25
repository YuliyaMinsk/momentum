import './sass/style.scss';
// import sound1 from '../assets/audio/Aqua Caelestis.mp3';
// import sound2 from '../assets/audio/Ennio Morricone.mp3';
// import sound3 from '../assets/audio/River Flows In You.mp3';
// import sound4 from '../assets/audio/Summer Wind.mp3';

import { runSettings, openSettings } from './ts/settings';
import { runSlider } from './ts/slider';
import { runTimer } from './ts/timer';
import { runGreeting } from './ts/greeting';
import { runWeather } from './ts/weather';
import { getQuote } from './ts/quote';
import { showEstimate} from './ts/estimate';
import { runAudioPlayer } from './ts/audioplayer';

// Run start blocks
runSettings();
runSlider();
runTimer();
runGreeting();
runWeather();
getQuote();
showEstimate();
runAudioPlayer();

document.querySelector('.change-quote').addEventListener('click', function (event) {
  getQuote();
});

document.querySelector('.settings-icon').addEventListener('click', function (event) {
  openSettings();
});

