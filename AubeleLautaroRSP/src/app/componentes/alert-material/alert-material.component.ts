import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-material',
  templateUrl: './alert-material.component.html',
  styleUrls: ['./alert-material.component.css']
})
export class AlertMaterialComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
