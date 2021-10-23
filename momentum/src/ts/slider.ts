export function runSlider() {
  const arrowPrev = document.querySelector('.slide-prev');
  const arrowNext = document.querySelector('.slide-next');
  const stringBG = String(document.body.style.backgroundImage);
  let slideChange: boolean = false;
  let currentSlide = Number(stringBG.substring(stringBG.length - 8, stringBG.length - 6));
  
  setBackground(getRandomImage(20));

  arrowPrev.addEventListener('click', function (event) {
    if (slideChange) {
      if (currentSlide === 1) currentSlide = 20;
      else currentSlide--;  
      setBackground(currentSlide);
    }
  });

  arrowNext.addEventListener('click', function (event) {
    if (slideChange) {
      if (currentSlide === 20) currentSlide = 1;
      else currentSlide++;
      setBackground(currentSlide);
    }
  });

  document.body.addEventListener('transitionstart', () => {
    slideChange = false;
  });
  
  document.body.addEventListener('transitionend', () => {
    slideChange = true;
  });

}

function setBackground(numberSlide: number) {
  const image = new Image();
  image.src = getGitHubImage(numberSlide); 
  image.onload = () => {      
    document.body.style.backgroundImage = `url(${image.src})`;
  }; 
}

export function getTimeOfDay(): string {
  const today = new Date();
  const hours = today.getHours();

  if ((hours >= 0) && (hours < 6)) return 'night';
  if ((hours >= 6) && (hours < 12)) return 'morning';
  if ((hours >= 12) && (hours < 18)) return 'afternoon';
  if ((hours >= 18) && (hours <= 23)) return 'evening';
  
  return '';
}

function getRandomImage(max: number): number {
  return Math.floor(Math.random() * (max) + 1);
}

function getGitHubImage(numberSlide: number): string {
  return `https://yuliyaminsk.github.io/stage1-tasks/images/${getTimeOfDay()}/${String(numberSlide).padStart(2, '0')}.jpg`;
}

function getUnsplashAPICollection() {

}

function getFlickrAPICollection() {

}