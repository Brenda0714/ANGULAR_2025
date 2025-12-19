import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
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
