export const SITE = {
  name: '555 Triple Five',
  tagline: 'Experiencias que no se olvidan',
  description: 'Productora de eventos y experiencias en Costa Rica. Conciertos, fiestas y los mejores artistas.',
  url: 'https://triplefivecr.com',
  instagram: 'https://www.instagram.com/triplefivecr/',
  tickets: 'https://eventcr.com/eventPage.php?id=282&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnr8Ott882ant-lrQKp-ctJECjmQJfa82-ZWkMQ2NIgEjgpn14kuqoED6IvBA_aem_IZmiFWmJmY3pbkGhOoqGTA',
  email: 'triplefivecr@gmail.com',
  phone: '(+506) 8455-9647',
};

export const NAV_LINKS = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Equipo', href: '#team' },
  { label: 'Eventos', href: '#events' },
  { label: 'Próximamente', href: '#next' },
];

export const TICKER_ITEMS = [
  'Experiencias que no se olvidan',
  'Triple Five',
  'Costa Rica',
  'Made for the night',
];

export const CALENDAR_EVENTS = [
  { date: '20 · Dic · 25', handle: 'Barbel 507', status: 'pasado' as const, instagram: 'https://www.instagram.com/barbel_507/' },
  { date: '24 · Abr · 26', handle: 'Valentino GRM', status: 'pasado' as const, instagram: 'https://www.instagram.com/valentino_grm/' },
  { date: '15 · May · 26', handle: 'El Roockie', status: 'proximo' as const, instagram: 'https://www.instagram.com/elroockiemusic/' },
  { date: '19 · Jun · 26', handle: 'SOON', status: 'tba' as const, instagram: '' },
  { date: '24 · Jul · 26', handle: 'SOON', status: 'tba' as const, instagram: '' },
];

export const PAST_EVENTS = [
  {
    id: 1,
    artist: 'VALENTINO GRM',
    label: '01',
    image: '/images/events/event-valentino-grm.png',
    tag: '@valentino_grm',
    variant: 'wide' as const,
  },
  {
    id: 2,
    artist: 'BARBEL 507',
    label: '02',
    image: '/images/events/barbel-507.png',
    tag: '@barbel_507',
    variant: 'tall' as const,
  },
];

export const NEXT_EVENT = {
  title: 'White Party',
  year: '2026',
  artist: 'Roockie en Concierto',
  date: '2026-05-15T22:00:00',
  venue: 'Centro de Eventos La Uruca',
  vipPhone: '7168 · 5020',
  tickets: 'https://eventcr.com/eventPage.php?id=282&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnr8Ott882ant-lrQKp-ctJECjmQJfa82-ZWkMQ2NIgEjgpn14kuqoED6IvBA_aem_IZmiFWmJmY3pbkGhOoqGTA',
  instagram: 'https://www.instagram.com/triplefivecr/',
  flyer: '/images/events/white-party-2026.jpg',
};

export const TEAM = [
  {
    name: 'Mathias Selva',
    role: 'Founder &\nDirector Creativo',
    handle: '@mathias_selva',
    label: 'Mathias',
    instagram: 'https://www.instagram.com/mathias_selva/',
    image: '/images/brand/mathias-selva-imagen.jpg',
  },
  { name: 'Member 02', role: 'Producción\nLogística', handle: '@member02', label: '02', instagram: '', image: '' },
  { name: 'Member 03', role: 'Marketing\nRedes', handle: '@member03', label: '03', instagram: '', image: '' },
  { name: 'Member 04', role: 'Booking\nCuraduría', handle: '@member04', label: '04', instagram: '', image: '' },
  { name: 'Member 05', role: 'Diseño\nVisuales', handle: '@member05', label: '05', instagram: '', image: '' },
];

export const TIKTOK_URL = 'https://www.tiktok.com/@triplefivecr/video/7634616826810404116';
