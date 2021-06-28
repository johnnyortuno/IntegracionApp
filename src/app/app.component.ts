import { Component  , OnInit } from '@angular/core';
import * as  data  from  '../assets/json/estados.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaestados=[];
  title = 'integracion-app';
  //selectedEstado: data = new data('','');


  ngOnInit(): void {
    console.log('Leyendo el archivo Json:');
    console.log(data);

  }
  

  
}
