export function showEstimate() {
  console.log(`Score 121/160
[+] Часы и календарь +15
[+] время выводится в 24-часовом формате, например: 21:01:00 +5
[+] время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5
[+] выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5

[+] Приветствие +10
[+] текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5
[+] пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5

[+] Смена фонового изображения +20
[+] При загрузке или перезагрузке приложения фоновое изображение выбирается из расположенной на GitHub коллекции изображений. Cсылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5
[+] изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.
[+] изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5
[+] изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5
[+] при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения +5

[+] Виджет погоды +15
[+] город по умолчанию - Минск, пока пользователь не ввёл другой город
при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5
[+] для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API
данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5
[+] выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5

[+] Виджет цитата дня +10
[+] при загрузке страницы приложения отображается рандомная цитата и её автор +5
[+] Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5 
ЦИТАТ ВСЕГО 10, ПОЭТОМУ МОЖЕТ ВЫДАТЬ ПОВТОРНУЮ, ПРОСТО КЛИКНИТЕ ЕЩЕ РАЗ!

[+] Аудиоплеер +15
[+] при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3
[+] при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3
[+] треки можно пролистывать кнопками Play-next и Play-prev, треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3
[+] трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3
[+] после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3

[-] Продвинутый аудиоплеер (реализуется без использования библиотек) 0

[+] Перевод приложения на два языка (en/ru) +15
[+] переводится язык и меняется формат отображения даты +3
[+] переводится приветствие и placeholder +3
[+] переводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3
[+] переводится цитата дня (используйте подходящий для этой цели API, возвращающий цитаты на нужном языке или создайте с этой целью JSON-файл с цитатами на двух языках) +3
[+] переводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3
не переводятся данные, которые вводит пользователь: имя, город, тег для получения фонового изображения от API

[+] Получение фонового изображения от API +10 
[+] в качестве источника изображений может использоваться Unsplash API +5
[+] в качестве источника изображений может использоваться Flickr API +5
У FLICKR ОБРАБОТКА ЗАПРОСА РАБОТАЕТ ОЧЕНЬ МЕДЛЕННО, ТАК ЧТО ПРИДЕТСЯ СЕКУНД 10 ПОДОЖДАТЬ

[+] Настройки приложения +11
[+] в настройках приложения можно указать язык приложения (en/ru) +3
[+] в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3
[+] настройки приложения сохраняются при перезагрузке страницы +5

[-] Дополнительный функционал на выбор 0
`);
}