import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,Validators, FormControl } from '@angular/forms';





@Component({
  selector: 'app-detalle-form',
  templateUrl: './detalle-form.component.html',
  styleUrls: ['./detalle-form.component.css']
})
export class DetalleFormComponent implements OnInit {

  
  constructor() { }
  ngOnInit(): void {
  }

 // variables generales 
 Accion = new FormControl('');   // variabla para las codicion de  I: insertar , U:Actualizar 

// Objeto  datos de la vista  detalle
  detalleform = new FormGroup({
    Middleware: new FormControl(''), 
    Estados : new   FormControl(''),
    SecuenciaOrigen: new FormControl(''),
    SecuenciaDestino: new FormControl(''),
    InstanciaOrigen: new FormControl(''),
    InstanciaDestino: new FormControl(''),
    ConexionOrigen : new FormControl(''),
    ConexionDestino : new FormControl(''),
    UsuarioComunicaciónOrigen : new FormControl(''),
    UsuarioComunicaciónDestino : new FormControl(''), 
    CertificadoOrigen : new FormControl(''), 
    CertificadoDestino : new FormControl(''),
    JobRelacionadoOrigen : new FormControl(''),
    JobRelacionadoDestino  : new FormControl(''),
    CelulaResponsableOrigen : new FormControl(''),
    CelulaResponsableDestino : new FormControl(''),
    ConectorOrigen : new FormControl(''),
    ConectorDestino : new FormControl(''),
    SistemaLogicoOrigen : new FormControl(''),
    SistemaLogicoDestino : new FormControl(''),   

  });

  public estadoSolicitud  = [
    { id: 1, descripcion: 'Activo' },
    { id: 2, descripcion: 'Inactivo' }   
  ];

  // Eventos de la vista  
  onSubmit() {
    // TODO:Este el evento para enviar los datos de la pantalla 
    //console.warn(this.detalleform.value);
  }

  

}
