/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        name: 'Мой театр', title: 'Николай Цискаридзе — яркая, харизматичная личность, чья эрудиция, независимость и острота суждений превращают каждое высказывание в событие.Автобиография «Мой театр» создана на основе дневника 1985–2003 гг. Это живой, полный тонкой иронии, юмора, а порой и грусти рассказ о себе, о времени и балете', author: 'Цискаридзе Н.М.', img: '/icons/1_teatr.png', userId: 1,
      },
      {
        name: 'Чертовы подростки!', title: 'Детский и подростковый психолог Никита Карпов знает о взрослении всё. 20 лет он помогает подросткам и родителям найти общий язык и решает их проблемы. В легкой форме, с долей юмора, Никита Карпов рассказывает о реальных кейсах, профессиональных техниках и методиках, которые спасут ваши нервы, наладят крепкие доверительные отношения и помогут воспитать самостоятельного человека', author: 'Карпов Н.Л.', img: '/icons/2_podrostki.png', userId: 1,

      }, {
        name: 'Зачарованный город. Это гиблое место', title: 'Мистическая новинка от автора бестселлера «Уничтожить королевство» Александры Кристо! Более 14 000 человек добавили книгу в раздел «Хочу прочитать» на портале Goodreads.com. Четыре темных героя, четыре запутанных судьбы и четыре цели, ради достижения которых они готовы пойти на все. Магия или ловкость рук? Нищета или власть? Что выберет каждый из них?', author: 'Кристо А.А.', img: '/icons/3_mesto.png', userId: 1,

      }, {
        name: 'Боги и чудовища', title: 'От автора бестселлеров по версии The New York Times.Захватывающее завершение трилогии, начатой романами «Змей и голубка» и «Кровь и мёд»Для всех поклонников Сары Дж. Маас и Дженнифер Арментроут. Магическая война подходит к завершению. Поле битвы ждёт. Конец света настал, и ознаменовал его не крик.', author: 'Махерин Ш.С.', img: '/icons/4_gods.png', userId: 1,

      }, {
        name: 'Как не умереть в одиночестве', title: 'Эндрю живет в небольшой квартире в Лондоне и работает в муниципалитете, в отделе регистрации смертей. Мало того что работа специфическая, Эндрю еще приходится изо дня в день поддерживать среди коллег миф о своей якобы успешной жизни. При приеме на работу он, не расслышав вопроса, ответил "да" вместо "нет", когда его спросили, женат ли он. С годами Эндрю создал целый вымышленный мир, где у него есть особняк, любимая жена и двое детей.', author: 'Роупер Р.Р.', img: '/icons/5_died.png', userId: 1,

      }, {
        name: 'К себе нежно. Книга о том, как ценить и беречь себя', title: '«К себе нежно» — это книга для тех, кто выбирает себя. Для тех, кто долго не понимал и игнорировал свои желания. Сдерживал свои чувства. Не принимал свое тело. И никогда не знал, как это — праздновать свою уникальность. Но сегодня хочет стать себе другом. Нежность к себе — это не результат волевого решения или однажды данного себе обещания, это всегда дорога. Пусть эта книга станет для вас проводником, если вы готовы с доброжелательным любопытством исследовать свои «не могу», «не хочу» и «не буду» и плыть не по течению и не против него — а туда, куда вам нужно.', author: 'Примаченко О.В.', img: '/icons/6_myself.png', userId: 1,
      },
      {
        name: 'Путь домохозяина', title: 'Бессмертный Тацу — якудза, оставивший после себя множество легенд в преступном мире. Одно его имя вселяло ужас не только в конкурентов, но даже в полицейских. Однажды он неожиданно завязывает с бандитской жизнью и выбирает новый путь... Путь домохозяина! Сможет ли Тацу позабыть своё тёмное прошлое, стать хорошим семьянином и вести спокойную жизнь? Получится ли у него сменить уличные разборки на борьбу с готовкой и пылью?', author: 'Оно К.М.', img: '/icons/7_domohoz.png', userId: 1,
      },
      {
        name: 'Дежавю. Богемский рэп, сода и я', title: '"Дежавю" - максимально откровенная и провокационная автобиография самого известного российского рэп – артиста KIZARU. Лайфстайл Олега Нечипоренко уже давно ассоциируется с жизнью, о которой тайком мечтают сотни тысяч — стремительная карьера, побег из России, миллионы подписчиков в соцсетях.', author: 'Нечипоренко О.А.', img: '/icons/8_dezhav.png', userId: 1,
      },
      {
        name: 'Гарри Поттер и философский камень', title: 'Жизнь Гарри Поттера меняется до неузнаваемости в одиннадцатый день рождения, когда Рубеус Огрид, гигант с похожими на жуков глазами, вручает ему письмо с фантастическими известиями. Гарри Поттер – вовсе не обычный мальчик. Он колдун. И стоит на пороге удивительнейших приключений…', author: 'Роулинг Д.К.', img: '/icons/9_garry.png', userId: 1,
      },
      {
        name: 'Ночь перед Рождеством', title: 'Ночь перед Рождеством» - мистическая история о чертовщине, творящейся в одной деревеньке, и сильном искреннем чувстве кузнеца Вакулы. Чтобы добиться расположения красавицы Оксаны, он и самого черта оседлает, и слетает на нем в столицу за черевичками самой царицы. Ведь искреннему чувству не страшны никакие трудности, даже нечисть!', author: 'Гоголь Н.В.', img: '/icons/10_noch.png', userId: 1,
      },
      {
        name: 'Как Уинстон вернулся домой на Рождество', title: 'Отважного Мыша Уинстона снова ждут приключения! Благодаря своей храбрости и доброму сердцу он уже обрёл дом и настоящего друга в предыдущей книге «Как Уинстон доставил Рождество», но сейчас он чувствует, что должен найти близких, которых однажды потерял. В компании своих верных друзей он справится с любыми трудностями и обязательно успеет вернуться домой к Рождеству — как и обещал!', author: 'Смит А.А.', img: '/icons/11_Uinzton.png', userId: 1,
      },
      {
        name: 'GTO. Крутой учитель Онидзука. Книга 3', title: 'Благодаря искреннему интересу к судьбе своих подопечных Онидзука заслужил уважение учеников класса 3-4, а после успешной сдачи национального экзамена и учителя поняли, что он не лыком шит. Он уже готов поверить, что трудности позади: Онидзука - любимец школы и даже стал героем новостей!.. Но однажды он встречает девочку, которую прежде никогда не видел в классе. Ее зовут Уруми Канадзаки, ее IQ зашкаливает за 200, она - самый опасный человек в этой школе, и она ненавидит учителей всей душой.', author: 'Футзисава Т.А.', img: '/icons/12_futzi.jpeg', userId: 1,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

  },
};
