export function runSlider() {
  const arrowPrev = document.querySelector('.slide-prev');
  const arrowNext = document.querySelector('.slide-next');
  let slideChange: boolean = true;
  let currentSlide = getRandom(20);
  
  setBackground(currentSlide);

  arrowPrev.addEventListener('click', function (event) {
    const imageSource = String((<HTMLInputElement>document.querySelector('input[name="image-source"]:checked')).value);

    if (imageSource === 'github') {
      let stringBG = document.body.style.backgroundImage;
      currentSlide = Number(stringBG.substring(stringBG.length - 8, stringBG.length - 6));

      if (slideChange) {
        if (currentSlide) {
          if (currentSlide <= 1) currentSlide = 20;
          else currentSlide--;  
          setBackground(currentSlide);
        } else {
          console.log('random!!!');
          setBackground(getRandom(20));
        }
      }
    }
    if (imageSource === 'unsplash') {
      getUnsplashAPICollection();
    }
    if (imageSource === 'flickr') {
      getFlickrAPICollection();
    }
  });

  arrowNext.addEventListener('click', function (event) {
    const imageSource = String((<HTMLInputElement>document.querySelector('input[name="image-source"]:checked')).value);

    if (imageSource === 'github') {
      let stringBG = document.body.style.backgroundImage;
      currentSlide = Number(stringBG.substring(stringBG.length - 8, stringBG.length - 6));
      if (slideChange) {
        if (currentSlide) {
          if (currentSlide >= 20) currentSlide = 1;
          else currentSlide++;
          setBackground(currentSlide);
        } else {
          console.log('random!!!');
          setBackground(getRandom(20));
        }
      }
    }
    if (imageSource === 'unsplash') {
      getUnsplashAPICollection();
    }
    if (imageSource === 'flickr') {
      getFlickrAPICollection();
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
  const imageSource = String((<HTMLInputElement>document.querySelector('input[name="image-source"]:checked')).value);

  if (imageSource === 'github') {
    const image = new Image();
    image.src = getGitHubImage(numberSlide); 
    image.onload = () => {      
      document.body.style.backgroundImage = `url(${image.src})`;
    }; 
  }
  if (imageSource === 'unsplash') {
    getUnsplashAPICollection();
  }
  if (imageSource === 'flickr') {
    getFlickrAPICollection();
  }

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

export function getRandom(max: number): number {
  return Math.floor(Math.random() * (max) + 1);
}

function getGitHubImage(numberSlide: number): string {
  return `https://yuliyaminsk.github.io/stage1-tasks/images/${getTimeOfDay()}/${String(numberSlide).padStart(2, '0')}.jpg`;
}

async function getUnsplashAPICollection() {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${getTimeOfDay()},nature&client_id=Su3VnldqmzeczOtgaoofRm8mDUoq23M0ZrBQMBIYZNU`;
  const res = await fetch(url);
  const data = await res.json();

  const image = new Image();
  image.src = String(data.urls.regular); 
  image.onload = () => {      
    document.body.style.backgroundImage = `url(${image.src})`;
  };

  return true;
}

async function getFlickrAPICollection() {
  const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&extras=url_o&api_key=406f31cc2822240fd6fb01c8e68dfaa6&tags=nature&extras=url_l&format=json&nojsoncallback=1&extras=url_o';
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  const image = new Image();
  image.src = String(data.photos.photo[getRandom(data.photos.photo.length - 1)].url_o); 

  image.onload = () => {      
    document.body.style.backgroundImage = `url(${image.src})`;
  };

  return true;
}