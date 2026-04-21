import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
name = signal('');
power= signal(0);



  addCharacters(){

  if( !this.name() || !this.power() || this.power() <= 0){
    return;
  }

  const newCharacter: Character = {
    //id: this.characters().length + 1,
    id: 10000,
    name: this.name(),
    power: this.power()
  }

 // this.characters().push(newCharacter);
 //this.characters.update((list) => [...list, newCharacter] );


    console.log(this.name(), this.power());
    console.log({newCharacter});
this.resetFields();
  }

    resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
