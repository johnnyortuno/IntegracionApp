import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FichaComponent} from '../app/ficha/ficha.component'
 

const routes: Routes = [

  {
    path: '',
    component: FichaComponent
  },
  {
    path: 'busqueda',
    component: BusquedaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
