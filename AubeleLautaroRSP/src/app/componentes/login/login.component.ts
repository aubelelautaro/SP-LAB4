import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AlertMaterialService } from 'src/app/servicios/alert-material.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm;
  usuario:Usuario = new Usuario();
  constructor(
    public auth:AuthService,
    private router:Router,
    private usuarioService:UsuarioService,
    private fb:FormBuilder,
    private alert:AlertMaterialService
  ) { }
  
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      correo:["",Validators.compose([Validators.maxLength(40),Validators.required,Validators.email])],
      clave:["",Validators.compose([Validators.minLength(6),Validators.required])]
    })
  }

  ngOnSubmit()
  {

  }

  Login()
  {
    this.auth.signIn(this.usuario)
    .then((data)=>{
      this.auth.usuarioLogeado = data.user;
      this.usuarioService.ObtenerUsuario(this.usuario)
      .valueChanges().subscribe(data=>{
        this.auth.usuarioInfo = data[0];
        this.router.navigateByUrl('/home');
      })
    })
    .catch(error =>{
      console.log(error);
      this.alert.openDialog("Error","Ocurrio un error al logearse. Verifique que los datos ingresados sean correctos.");
    });
  }

}
