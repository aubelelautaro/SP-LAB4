import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/servicios/auto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-baja-auto',
  templateUrl: './baja-auto.component.html',
  styleUrls: ['./baja-auto.component.css']
})
export class BajaAutoComponent implements OnInit {

  @Output() OnElegir = new EventEmitter<any>();
  displayedColumns: string[] = ['nombre','marca','patente','kilometros','año','elegir'];
  dataSource;
  constructor(
    public autoService :AutoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.autoService.ObtenerTodosLosAutos().valueChanges().subscribe((data)=>{
      console.log("datos",data);
      this.dataSource = data;
    });
  }

  ElegirAuto(element)
  {
    this.OnElegir.emit(element);
    this.autoService.eliminarAuto(element);
  }

  Cancelar()
  {
    this.router.navigateByUrl('/login');
  }

}
