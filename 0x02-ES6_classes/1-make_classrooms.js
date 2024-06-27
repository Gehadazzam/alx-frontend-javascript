import ClassRoom from './0-classroom';

function initializeRooms() {
  // It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}

export default initializeRooms;
