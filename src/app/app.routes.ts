import { Routes } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { MediaqueriesComponent } from './components/mediaqueries/mediaqueries.component';
import { TransicionesComponent } from './components/transiciones/transiciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'mediaqueries', component: MediaqueriesComponent },
  { path: 'transiciones', component: TransicionesComponent },
  { path: 'hoja_de_vida', component: HojaDeVidaComponent },
  {path: 'calculadora', component: CalculadoraComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path:'**', redirectTo: 'inicio', pathMatch:'full'}
];
