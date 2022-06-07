

let eventGuid = 0;
export let INITIAL_EVENTS: any[] = [];

export function createEventId() {
  return String(eventGuid++);
}