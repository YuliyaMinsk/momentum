import i18next from './i18n.js';
import { getRandom } from './slider';

import urlEnQuote from '../assets/data-en.json';
import urlRuQuote from '../assets/data-ru.json';

export async function getQuote() {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');

  const language = String((<HTMLInputElement>document.querySelector('input[name="language"]:checked')).value);

  //const urlQuote = 'https://type.fit/api/quotes';  
    
  try {
    let res;
    switch (language) {
      case 'ru': res = await fetch(urlRuQuote); break;
      case 'en': res = await fetch(urlEnQuote); break;
    }
    const data = await res.json(); 
    
    const randomNumber = getRandom(data.length);
    const quoteFromFile = data[randomNumber];

    quote.textContent = quoteFromFile["text"],
    author.textContent = quoteFromFile["author"] !== null ? quoteFromFile["author"] : "Unknown Author";

  } catch (e) {
    quote.textContent = i18next.t('error-quote');
    author.textContent = i18next.t('error-author');
  }
}
