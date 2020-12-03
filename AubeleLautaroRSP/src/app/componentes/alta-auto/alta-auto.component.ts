import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMaterialService } from 'src/app/servicios/alert-material.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AutoService } from 'src/app/servicios/auto.service';
import { Auto } from '../../clases/auto';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-alta-auto',
  templateUrl: './alta-auto.component.html',
  styleUrls: ['./alta-auto.component.css']
})
export class AltaAutoComponent implements OnInit {

  auto:Auto = new Auto()
  profileForm;
  constructor(
    public router:Router,
    public usuariosService:UsuarioService,
    private fb:FormBuilder,
    private alert:AlertMaterialService,
    private autoService: AutoService,
    private auth : AuthService,
  ) { }

  ngOnInit(): void {
    this.auth
    this.auto.duenio = this.auth.usuarioInfo;
    this.profileForm = this.fb.group({
      marca:["",Validators.compose([Validators.max(20),Validators.min(3),Validators.required])],
      nombre:["",Validators.compose([Validators.maxLength(30),Validators.required])],
      kilometros:["",Validators.compose([Validators.max(1000000),Validators.required])],
      anio:["",Validators.compose([Validators.max(2021), Validators.min(1900),Validators.required])],
      patente:["",Validators.compose([Validators.maxLength(9), Validators.minLength(6),Validators.required])],
    });
  }

  Registrar()
  {
    this.autoService.CrearAuto(this.auto).then(()=>{
      console.log('Se ha creado el auto en Firestore');
      this.alert.openDialog('Nueva auto','Se creó el auto: ' + this.auto.nombre);
      this.Cancelar();
    })
    .catch((error)=>{
      this.alert.openDialog('Error','No se pudo crear el auto');
      console.log(error);
    });
  }

  Cancelar()
  {
    this.router.navigateByUrl('/home');
  }

}
