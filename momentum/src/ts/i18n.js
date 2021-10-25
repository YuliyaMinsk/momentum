import i18n from 'i18next';

i18n
  .init({
    fallbackLng: 'ru',
    whitelist: ['ru', 'en'],
    debug: false,
    resources: {
      en: {
        translation: {
          'language-description': 'Select your preferred language:',
          'image-source-description': 'Select image background source:',
          'error-quote': 'Something went wrong',
          'error-author': 'Try to reload page!',
          'greetings-night': 'Good night, ',
          'greetings-morning': 'Good morning, ',
          'greetings-afternoon': 'Good afternoon, ',
          'greetings-evening': 'Good evening, ',
          'wind': 'Wind speed:',
          'humidity': 'Humidity:',
          'name-placeholder': 'Your name',
          'error-weather': 'Сity with the name has not been found!',
        }
      },
      ru: {
        translation: {
          'language-description': 'Выберите язык:',
          'image-source-description': 'Выберите источник фоновых изображений:',
          'error-quote': 'Что-то пошло не так',
          'error-author': 'Попробуйте перегрузите страницу!',
          'greetings-night': 'Доброй ночи, ',
          'greetings-morning': 'Доброе утро, ',
          'greetings-afternoon': 'Добрый день, ',
          'greetings-evening': 'Добрый вечер, ',
          'wind': 'Скорость ветра:',
          'humidity': 'Влажность:',
          'name-placeholder': 'Ваше имя',
          'error-weather': 'Город с таким названием не найден!',
        }
      }
    }
  });

export default i18n;