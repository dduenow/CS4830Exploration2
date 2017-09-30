import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const heroes  = [
    { id: 0,  name: 'Zero' },
    { id: 11, name: 'Mr. Clean' },
    { id: 12, name: 'Mr. Bad' },
    { id: 13, name: 'Mr. Freeze' },
    { id: 14, name: 'Mr. Ice' },
    { id: 15, name: 'Mr. Mean' },
    { id: 16, name: 'Penguin' },
    { id: 17, name: 'Joker' },
    { id: 18, name: 'Ivy' },
    { id: 19, name: 'Goblin' },
    { id: 20, name: 'Juggernaut' }
  ];
    return {heroes};
  }
}
