import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter/counter-page.component';
import { tarea1CounterComponent } from './components/counter/tarea1Counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [

  {
    path: 'counter',

    component: tarea1CounterComponent,
  },
  {
    path: 'hero',

    component: HeroPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }


];
