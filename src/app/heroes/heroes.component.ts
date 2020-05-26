import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(title: string, description: string): void {
    title = title.trim();
    description = description.trim();
    if (!title && !description) { return; }
    this.heroService.addHero({ title, description } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  mark(hero: Hero): void {
    this.heroes = this.heroes.map(h => 
      (h.id == hero.id)
      ? {...h, mark: !h.mark}
      : h
    );
    console.log(hero);
    this.heroService.updateHero(hero).subscribe();
  }
}