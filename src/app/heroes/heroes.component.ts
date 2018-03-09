import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';            //importing mock heros from app/mock heroes

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',          //heroes component template file
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

    onSelect(hero: Hero): void {                     //Click event binding defination
    this.selectedHero = hero;
    }

}