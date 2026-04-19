import { NgClass } from '@angular/common';
import { Component, signal, computed} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page.component',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.scss',
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  })

}
