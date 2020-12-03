import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListadoAutosComponent } from './componentes/listado-autos/listado-autos.component';
import { AltaAutoComponent } from './componentes/alta-auto/alta-auto.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginGuard } from './guards/login.guard';
import { BajaAutoComponent } from './componentes/baja-auto/baja-auto.component';
import { ModificarAutoComponent } from './componentes/modificar-auto/modificar-auto.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'altaAuto',
    component:AltaAutoComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'eliminarAuto',
    component:BajaAutoComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'modificarAuto',
    component:ModificarAutoComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'listadoAutos',
    component:ListadoAutosComponent
  },
  {
    path:'**',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
