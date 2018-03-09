import { Component, OnInit, Input } from '@angular/core';    
import { Hero } from '../hero';                        //importing the hero class
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;     // importing hero

  constructor() { }

  ngOnInit() {
  }

}
