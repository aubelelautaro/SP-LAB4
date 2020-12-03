import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioLogeado;
  usuarioInfo;
  constructor(
    public auth:AngularFireAuth
  ) { }

  CrearUsuario(usuario)
  {
    try {
      return this.auth.createUserWithEmailAndPassword(usuario.correo,usuario.clave);
    } catch (error) {
      console.log('Error al crear usuario FireAuth');
      console.log(error);
    }
  }

  signIn(usuario)
  {
    this.usuarioInfo = usuario;
    return this.auth.signInWithEmailAndPassword(usuario.correo,usuario.clave);
  }

  logOut()
  {
    return this.auth.signOut();
  }

  UsuarioActual()
  {
    return this.auth.currentUser;
  }
}
