import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/servicios/auto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent implements OnInit {

  @Output() OnElegir = new EventEmitter<any>();
  displayedColumns: string[] = ['nombre','marca','patente','kilometros','año'];
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

  ElegirMateria(element)
  {
    this.OnElegir.emit(element);
  }

  Cancelar()
  {
    this.router.navigateByUrl('/login');
  }

}
