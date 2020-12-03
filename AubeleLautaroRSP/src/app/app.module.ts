import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MATERIAL
import { MatCardModule } from  '@angular/material/card';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { MatSelectModule } from  '@angular/material/select';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { EmailComponent } from './componentes/email/email.component';
import { AlertMaterialComponent } from './componentes/alert-material/alert-material.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoAutosComponent } from './componentes/listado-autos/listado-autos.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { BajaAutoComponent } from './componentes/baja-auto/baja-auto.component';
import { ModificarAutoComponent } from './componentes/modificar-auto/modificar-auto.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AltaAutoComponent } from './componentes/alta-auto/alta-auto.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    EmailComponent,
    AlertMaterialComponent,
    HomeComponent,
    ListadoAutosComponent,
    ToolbarComponent,
    AltaAutoComponent,
    BajaAutoComponent,
    ModificarAutoComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
