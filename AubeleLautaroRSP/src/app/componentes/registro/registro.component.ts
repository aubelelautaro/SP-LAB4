import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AlertMaterialService } from 'src/app/servicios/alert-material.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  profileForm;
  usuario:Usuario = new Usuario();
  constructor(
    public auth:AuthService,
    public router:Router,
    public usuariosService:UsuarioService,
    private fb:FormBuilder,
    private alert:AlertMaterialService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      correo:["",Validators.compose([Validators.maxLength(40),Validators.required,Validators.email])],
      clave:["",Validators.compose([Validators.minLength(6),Validators.required])]
    })
  }

  
  Registrar()
  {
    this.auth.CrearUsuario(this.usuario)
    .then(()=>{
      this.alert.openDialog("Nuevo registro","Se creó un nuevo usuario");
      this.usuariosService.CrearUsuario(this.usuario);
      this.router.navigateByUrl('/login');
    })
    .catch(error=>{
      console.log(error);
      this.alert.openDialog("Error","No se pudo crear el usuario.");
    });
  }

  Cancelar()
  {
    this.router.navigateByUrl('/login');
  }

}
