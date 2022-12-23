import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-cito-pacientes',
  templateUrl: './cito-pacientes.page.html',
  styleUrls: ['./cito-pacientes.page.scss'],
  providers: [UseruService,DataService]
})
export class CitoPacientesPage implements OnInit {

  public title:string;
  public paciente;
  public token;
  public identity;
  public unidadFiltrada;
  public numPacientes;

  public numFilas;
  public numCitos;
  public celda
  public fila;

  public campos =[];
  public datos = [];

  public loading:boolean;
  public busqueda:string="";


  constructor(
    private _useruService:UseruService,
    private _dataService:DataService

  ) {
    this.title = "PACIENTES CITOLOGIA";
    this.token = this._useruService.getToken();
    this.identity = this._useruService.getIdentity();
    this.loading = true;
   }

  ngOnInit() {
    this.getcitoPacientes();
  }

  getcitoPacientes(){

    this._dataService.getcitoData().subscribe(
      response => {
        const entries = response.values;
        let campos = [];
        let datos = [];
        entries.forEach((fila, f) => {
          let obj = {};
          fila.forEach((celda, c) => {
            if (f === 0) {
              campos.push(celda);
            } else {
              obj[campos[c]] = celda;
            }
          });
          if (f > 0) {
            datos.push(obj);
          }
        });
        this.datos = datos;
        this.loading = false;
       // console.log(this.datos);

        this.unidadFiltrada = this.datos.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });
        this.numPacientes = this.unidadFiltrada.length;
        //console.log(this.numPacientes);
        
        //console.log(this.unidadFiltrada);
        
      },
    error => {
      console.log(<any>error);
      
    });


  }

  onSearchChange(event){
    this.busqueda = event.detail.value;
  }

}
