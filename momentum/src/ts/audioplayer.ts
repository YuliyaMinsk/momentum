import playList from './playList';

const audio = new Audio();
let currentTime = 0;
let currentAudio = 0;
let volume = 0.5;
let isPlay = false;

export function runAudioPlayer() {
  const play = document.querySelector('.play');
  const playPrev = document.querySelector('.play-prev');
  const playNext = document.querySelector('.play-next');

  play.addEventListener('click', playAudio);
  playPrev.addEventListener('click', playPrevAudio);
  playNext.addEventListener('click', playNextAudio);
  audio.addEventListener('ended', playNextAudio);
  
  createPlayList();
}

function createPlayList() {
  const listContainer = document.querySelector('.play-list');

  playList.forEach((audio, index) => {
    const listItem = document.createElement('li');
    listItem.id = String(index);
    listItem.textContent = audio.title;
    listItem.classList.add('play-item');
    listContainer.append(listItem);
  });
}

function playAudio() {
  const listContainer = document.querySelector('.play-list');
  const play = document.querySelector('.play');

  audio.src = playList[currentAudio].src;

  if (!isPlay) {
      audio.currentTime = currentTime;
      isPlay = true;
      (<Element>play).classList.add('pause');
      (<Element>listContainer.childNodes[currentAudio]).classList.add('item-active');
      audio.volume = volume;
      audio.play();
  } else {
      isPlay = false;
      currentTime = audio.currentTime;
      (<Element>play).classList.remove('pause');
      (<Element>listContainer.childNodes[currentAudio]).classList.remove('item-active');
      audio.pause();
  }
}

function playNextAudio() {
  const listContainer = document.querySelector('.play-list');

  (<Element>listContainer.childNodes[currentAudio]).classList.remove('item-active');
  currentAudio = (currentAudio + 1 >= playList.length) ? 0 : currentAudio + 1;
  currentTime = 0;
  isPlay = false;
  audio.src = playList[currentAudio].src;
  playAudio();
}

function playPrevAudio() {
  const listContainer = document.querySelector('.play-list');

  audio.src = playList[currentAudio].src;

  (<Element>listContainer.childNodes[currentAudio]).classList.remove('item-active');
  currentAudio = (currentAudio - 1 < 0) ? playList.length - 1 : currentAudio - 1;
  currentTime = 0;
  isPlay = false;
  audio.src = playList[currentAudio].src;
  playAudio();
}