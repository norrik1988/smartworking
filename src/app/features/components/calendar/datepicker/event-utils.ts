import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
export let TODAY_STR  = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export let INITIAL_EVENTS: any[] = [];

export function createEventId() {
  return String(eventGuid++);
}