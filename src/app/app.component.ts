import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { MediaqueriesComponent } from './components/mediaqueries/mediaqueries.component';
import { TransicionesComponent } from './components/transiciones/transiciones.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TablaComponent, NavegacionComponent, MediaqueriesComponent, TransicionesComponent, RouterOutlet, RouterLink, HojaDeVidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina_angular';
}


