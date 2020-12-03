import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public opciones = {
    altaAuto: false,
    modificarAuto: false,
    bajaAuto: false, //Listado de materias y listado de alumnos para inscribir 
    listadoAutos: false, //Listado de materias
    logout: false
  }
  editarMascota;
  constructor() { }

  ngOnInit(): void {
    this.opciones.altaAuto = true;
  }

  OnOpcionElegida(event){
    console.log(event)
    this.opciones =  event;
  }

}
