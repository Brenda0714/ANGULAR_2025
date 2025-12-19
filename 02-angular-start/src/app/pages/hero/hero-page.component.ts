
import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
  imports: [UpperCasePipe],
})


export class HeroPageComponent{


  constructor() { }

  ngOnInit() { }

  Name = signal('Ironman');
  Age = signal(45);


  heroDescription = computed(() => {
    const description = `${this.Name()} - ${this.Age()}`;
    return description;
  })

  capitalizedName = computed(() => this.Name().toUpperCase());

  getHeroDescription() {
    return `${this.Name()} - ${this.Age()}`
  }

  changeAge() {
  this.Age.set(60)
  }

  changeHero() {
    this.Name.set('Spiderman');
    this.Age.set(22);
  }

  resetForm() {
    this.Name.set('Ironman');
    this.Age.set(45);
    }


}
