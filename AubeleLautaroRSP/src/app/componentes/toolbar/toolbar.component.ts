import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() opcion = new EventEmitter<any>();
  constructor(
    public auth:AuthService,
    public router:Router
  ) { }
  opciones = {
    altaAuto: false,
    modificarAuto: false,
    bajaAuto: false, //Listado de materias y listado de alumnos para inscribir 
    listadoAutos: false, //Listado de materias
    login: false
  }

  

  ngOnInit(): void {
    this.opcion.emit(this.opciones);
  }

  Opcion(opcion) {
    switch (opcion) {
      case 'login':
        this.auth.logOut;
        this.router.navigateByUrl('/login');
        break;
      case 'altaAuto':
        this.router.navigateByUrl('/altaAuto');
        break;
      case 'listadoAutos':
        this.router.navigateByUrl('/listadoAutos');
        break;
      case 'eliminarAuto':
        this.router.navigateByUrl('/eliminarAuto');
        break;
      case 'modificarAuto':
        this.router.navigateByUrl('/modificarAuto');
        break;
    }
  }

  QuitarTodasLasOpciones() {
    this.opciones = {
      altaAuto: false,
      modificarAuto: false,
      bajaAuto: false, //Listado de materias y listado de alumnos para inscribir 
      listadoAutos: false, //Listado de materias
      login: false
    }
  }

}
