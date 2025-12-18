import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
ngOnInit() {
  setInterval(() => {
    const pink = document.querySelector('.page::before');
    const peach = document.querySelector('.page::after');
  }, 0.5);
}

  protected readonly title = signal('Brenda Cavazos');
}
