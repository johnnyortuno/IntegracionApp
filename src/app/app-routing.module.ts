import { DetalleFormComponent } from './detalle-form/detalle-form.component';
 
import { LoginComponent } from './login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FichaComponent} from '../app/ficha/ficha.component';
import {HomeComponent} from  '../app/home/home.component'
 
 
const routes: Routes = [

  {
    path: 'home',
    component: FichaComponent
  },
  {
    path: 'busqueda',
    component: BusquedaComponent
  },
  {
    path: 'secuencia',
    component: DetalleFormComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'principal',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
