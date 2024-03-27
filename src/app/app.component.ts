import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personas = [
    { nombre: 'Persona 1', entradas: 3, gasto: 150 },
    { nombre: 'Persona 2', entradas: 2, gasto: 100 },
    { nombre: 'Persona 3', entradas: 4, gasto: 200 },
    { nombre: 'Persona 4', entradas: 1, gasto: 50 },
    { nombre: 'Persona 5', entradas: 5, gasto: 250 },
    { nombre: 'Persona 6', entradas: 2, gasto: 100 },
    { nombre: 'Persona 7', entradas: 3, gasto: 150 }
  ];
}
