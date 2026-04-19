
import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super'
})
export class DragonballSuperPageComponent {

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacters(){

  if( !this.name() || !this.power() || this.power() <= 0){
    return;
  }

  const newCharacter: Character = {
    id: this.characters().length + 1,
    name: this.name(),
    power: this.power()
  }

 // this.characters().push(newCharacter);
 this.characters.update((list) => [...list, newCharacter] );


    console.log(this.name(), this.power());
this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
