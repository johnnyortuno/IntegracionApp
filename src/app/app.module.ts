import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FichaComponent } from './ficha/ficha.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoginComponent } from './login/login.component';
import { DetalleFormComponent } from './detalle-form/detalle-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CabeceraComponent,
    DetalleComponent,
    FichaComponent,
    BusquedaComponent,
    LoginComponent,
    DetalleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
