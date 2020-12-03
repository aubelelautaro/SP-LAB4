import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertMaterialComponent } from '../componentes/alert-material/alert-material.component';

@Injectable({
  providedIn: 'root'
})
export class AlertMaterialService {

  constructor(public dialog: MatDialog) {}

  openDialog(titulo,mensaje): void {
    const dialogRef = this.dialog.open(AlertMaterialComponent, {
      width: '250px',
      data: {titulo: titulo, mensaje: mensaje}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
