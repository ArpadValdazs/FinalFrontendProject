import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(): { heroes: ({ name: string; id: number })[] } {
    const heroes = [
      {
        id: 1,
        name: 'Iron Man'
      },
      {
        id: 2,
        name: 'Stepungk'
      },
    ];
    return {heroes};
  }

  constructor() { }
}
