import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { MediaqueriesComponent } from './components/mediaqueries/mediaqueries.component';
import { TransicionesComponent } from './components/transiciones/transiciones.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    TablaComponent,
    NavegacionComponent,
    MediaqueriesComponent,
    TransicionesComponent,
    HojaDeVidaComponent,
    CalculadoraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina_angular';
}


