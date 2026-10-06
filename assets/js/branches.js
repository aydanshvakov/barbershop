export const DEFAULT_BRANCH = 'tonsor';

const searchUrl = (query) => `https://2gis.ru/novosibirsk/search/${encodeURIComponent(query)}`;

export const BRANCHES = {
  tonsor: {
    name: 'TonSor',
    eyebrow: 'Барбершоп · Краснообск',
    address: '3-й микрорайон, 1, рп. Краснообск',
    phone: '+7 (913) 062-99-82',
    phoneTel: '+79130629982',
    hours: 'Ежедневно · 10:00–21:00',
    rating: '5.0',
    reviewsCount: '330+ оценок',
    bookingUrl: searchUrl('TonSor 3-й микрорайон 1 Краснообск'),
    reviewsUrl: searchUrl('TonSor 3-й микрорайон 1 Краснообск отзывы'),
    routeUrl: `https://2gis.ru/routeSearch/rsType/car/to/82.9196,54.9203`,
    mapUrl: searchUrl('TonSor 3-й микрорайон 1 Краснообск'),
    services: ['Мужская стрижка · от 900 ₽', 'Оформление бороды', 'Стрижка и борода'],
    mastersNote: 'Выберите мастера и время внутри записи в 2ГИС.',
  },
  nurbarber: {
    name: 'Nurbarber',
    eyebrow: 'Барбершоп · Краснообск',
    address: '3-й микрорайон, 20, рп. Краснообск',
    phone: '+7 (923) 120-90-74',
    phoneTel: '+79231209074',
    hours: 'Актуальный режим работы — в 2ГИС',
    rating: null,
    reviewsCount: null,
    bookingUrl: searchUrl('Nurbarber 3-й микрорайон 20 Краснообск'),
    reviewsUrl: searchUrl('Nurbarber 3-й микрорайон 20 Краснообск отзывы'),
    routeUrl: `https://2gis.ru/routeSearch/rsType/car/to/82.9195,54.9166`,
    mapUrl: searchUrl('Nurbarber 3-й микрорайон 20 Краснообск'),
    services: ['Мужская стрижка', 'Оформление бороды', 'Комплексный уход'],
    mastersNote: 'Выберите мастера и время внутри записи в 2ГИС.',
  },
};
