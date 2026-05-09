export const SITE = {
  name: '555 Triple Five',
  tagline: 'Experiencias que no se olvidan',
  description: 'Productora de eventos y experiencias en Costa Rica. Conciertos, fiestas y los mejores artistas.',
  url: 'https://triplefivecr.com',
  instagram: 'https://www.instagram.com/triplefivecr/',
  tickets: 'https://eventcr.com/eventPage.php?id=282',
  email: 'hola@triplefive.cr',
};

export const NAV_LINKS = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Equipo', href: '#team' },
  { label: 'Eventos', href: '#events' },
  { label: 'Próximo', href: '#next' },
];

export const TICKER_ITEMS = [
  'Experiencias que no se olvidan',
  'Triple Five',
  'Costa Rica',
  'Made for the night',
];

export const CALENDAR_EVENTS = [
  { date: '20 · Dic · 25', handle: '@barbel_507', status: 'pasado' as const },
  { date: '24 · Abr · 26', handle: '@valentino_grm', status: 'pasado' as const },
  { date: '15 · May · 26', handle: '@elroockiemusic', status: 'proximo' as const },
  { date: '19 · Jun · 26', handle: 'SOON', status: 'tba' as const },
  { date: '24 · Jul · 26', handle: 'SOON', status: 'tba' as const },
];

export const PAST_EVENTS = [
  {
    id: 1,
    artist: 'VALENTINO GRM',
    label: '01 · Headliner',
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
  tickets: 'https://eventcr.com/eventPage.php?id=282',
  instagram: 'https://www.instagram.com/triplefivecr/',
  flyer: '/images/events/white-party-2026.jpg',
};

export const TEAM = [
  { name: 'Mathias Selva', role: 'Fundador\nDir. Creativa', handle: '@mathiasselva', label: 'Mathias' },
  { name: 'Member 02', role: 'Producción\nLogística', handle: '@member02', label: '02' },
  { name: 'Member 03', role: 'Marketing\nRedes', handle: '@member03', label: '03' },
  { name: 'Member 04', role: 'Booking\nCuraduría', handle: '@member04', label: '04' },
  { name: 'Member 05', role: 'Diseño\nVisuales', handle: '@member05', label: '05' },
];
