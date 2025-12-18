import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  standalone : true,
  selector: 'app-tarea1-counter',
  imports: [CommonModule],
  templateUrl: './tarea1Counter.component.html',
  styleUrls: ['./tarea1Counter.component.scss']
})

export class tarea1CounterComponent{
isBlocked: boolean = false;
showMessage: boolean = false;
showMessage2: boolean = false;

  counter = 0;

  increaseBy(value : number){

    if (this.isBlocked) return;

    this.counter += value;

    if(this.counter >= 10){
      this.showMessage = true;
      this.showMessage2 = false;
      this.isBlocked = true;


      setTimeout(() => {
      this.showMessage = false;
      this.isBlocked = false;
    }, 3000);

    this.counter = 0;
    }


  }

  decreaseBy(value : number){
    if (this.isBlocked) return;
    this.counter -= value;

    if(this.counter <= -10){
      this.showMessage2 = true;
      this.showMessage = false;
      this.isBlocked = true;

    setTimeout(() => {
      this.showMessage2 = false;
      this.isBlocked = false;
    }, 3000);

      this.counter = 0;
    }
  }

  resetCounter(){
    if (this.isBlocked) return;
    this.showMessage = false;
    this.counter = 0;
  }

}
