import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';
import { interval } from "rxjs";

@Component({
  standalone : true,
  selector: 'app-tarea1-counter',
  imports: [CommonModule],
  templateUrl: './tarea1Counter.component.html',
  styleUrls: ['./tarea1Counter.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class tarea1CounterComponent{
isBlocked: boolean = false;
showMessage: boolean = false;
showMessage2: boolean = false;

  counter = 0;

  counterSignal = signal(0);

  constructor(){
    setInterval(() => {
      // this.counter += 1;
      // this.counterSignal.update((v) => v + 1)
      this.increaseBy(1);
    }, 2000);
  }

  increaseBy(value : number){

    if (this.isBlocked) return;

    this.counter += value;

    this.counterSignal.update((current) => current + value);

    if(this.counter >= 10){
      this.showMessage = true;
      this.showMessage2 = false;
      this.isBlocked = true;


      setTimeout(() => {
      this.showMessage = false;
      this.isBlocked = false;
    }, 3000);

    this.counter = 0;
    this.counterSignal.set(0);
    }


  }

  decreaseBy(value : number){
    if (this.isBlocked) return;
    this.counter -= value;

    this.counterSignal.update((current) => current - value);


    if(this.counter <= -10){
      this.showMessage2 = true;
      this.showMessage = false;
      this.isBlocked = true;

    setTimeout(() => {
      this.showMessage2 = false;
      this.isBlocked = false;
    }, 3000);

      this.counter = 0;
      this.counterSignal.set(0);
    }
  }

  resetCounter(){
    if (this.isBlocked) return;
    this.showMessage = false;
    this.counter = 0;

    this.counterSignal.set(0);
  }

}
