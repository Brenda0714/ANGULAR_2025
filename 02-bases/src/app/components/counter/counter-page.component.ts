import { Component } from "@angular/core";



@Component({
  template: `
  <h1>Counter: {{counter}}</h1>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="increaseBy(1)">Reset</button>
  `,
})
export class CounterPageComponent{

  counter = 15;

  //metodo
  increaseBy(value: number){
    this.counter += value;

  }

  //metodo2
  decreaseBy(value: number){
    this.counter -= value;

  }

    //metodo3
  resetCounter(value: number){
    this.counter == this.counter;

  }
}
