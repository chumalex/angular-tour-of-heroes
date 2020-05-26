import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, title: 'Task #1', description: 'Description #1', mark: false },
      { id: 2, title: 'Task #2', description: 'Description #2', mark: false },
      { id: 3, title: 'Task #3', description: 'Description #3', mark: false },
      { id: 4, title: 'Task #4', description: 'Description #4', mark: false },
      { id: 5, title: 'Task #5', description: 'Description #5', mark: false },
      { id: 6, title: 'Task #6', description: 'Description #6', mark: false },
      { id: 7, title: 'Task #7', description: 'Description #7', mark: false },
      { id: 8, title: 'Task #8', description: 'Description #8', mark: false },
      { id: 9, title: 'Task #9', description: 'Description #9', mark: false },
      { id: 10, title: 'Task #10', description: 'Description #10', mark: false }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}