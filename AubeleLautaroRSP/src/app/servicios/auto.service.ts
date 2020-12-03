import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Auto } from '../clases/Auto';
import { Usuario } from '../clases/usuario';
import { AlertMaterialService } from './alert-material.service';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(
    public afs:AngularFirestore,
    public alert:AlertMaterialService
  ) { }

  CrearAuto(auto:Auto)
  {
    try {
      auto.id = this.afs.createId();
      return this.afs.collection('autos').doc(auto.id).set({
        marca: auto.marca,
        nombre: auto.nombre,
        kilometros: auto.kilometros,
        anio: auto.anio,
        patente: auto.patente,
        id : auto.id,
        duenio: '',
      })
      /*.then(()=>{
        console.log('Se ha creado la materia en Firestore');
        this.alert.openDialog('Operacion exitosa','La materia se ha creado exitosamente');
      })
      .catch((error)=>{
        this.alert.openDialog('Error','Error al crear usuario en firestore');
        console.log(error);
      });*/
    } catch (error) {
      console.log("Error en crearUsuario. usuarioService",error);
    }
  } 

  ObtenerTodosLosAutos(){
    return this.afs.collection('autos');
  }

   ObtenerAuto(auto:Auto){
    return this.afs.collection('autos',
      ref => ref.where("patente","==",auto.patente)
    );
  }

  ObtenerAutosPorDuenio(duenio){
    return this.afs.collection('autos',
      ref => ref.where("duenio","==",duenio)
    );
  }

  eliminarAuto(id){
    return this.afs.collection("autos").doc(id).delete();
  }

}
