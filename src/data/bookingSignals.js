import { serviceAreaCities, serviceAreaNeighborhoods } from './serviceAreas';

export const bookingAreas = [...serviceAreaCities, ...serviceAreaNeighborhoods];

export const bookingServices = [
  'photography session',
  'videography shoot',
  'hybrid coverage',
  'wedding photography',
  'event coverage',
  'brand film',
  'portrait session',
  'music video shoot',
  'corporate video',
  'headshot session',
];

export const bookingFirstNames = [
  'Alex',
  'Jordan',
  'Taylor',
  'Morgan',
  'Casey',
  'Riley',
  'Avery',
  'Quinn',
  'Jamie',
  'Drew',
  'Skyler',
  'Reese',
  'Cameron',
  'Parker',
  'Sydney',
];

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateBookingSignal() {
  const area = pickRandom(bookingAreas);
  const service = pickRandom(bookingServices);
  const name = pickRandom(bookingFirstNames);
  const variant = Math.floor(Math.random() * 4);

  switch (variant) {
    case 0:
      return { area, message: `Someone in ${area} just booked a ${service}` };
    case 1:
      return { area, message: `${name} from ${area} just booked` };
    case 2:
      return { area, message: `New ${service} booked in ${area}` };
    default:
      return { area, message: `Just booked — ${service} in ${area}` };
  }
}

export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
