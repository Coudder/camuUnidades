import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-detecmama-pacientes',
  templateUrl: './detecmama-pacientes.page.html',
  styleUrls: ['./detecmama-pacientes.page.scss'],
  providers: [UseruService,DataService]
})
export class DetecmamaPacientesPage implements OnInit {

  public title:string;
  public paciente:any;
  public token;
  public identity;

  
  public numFilas:any;
  public numDet:any;
  public celda:any
  public fila:any;

  public campos:any =[];
  public datos:any = [];

  public loading:boolean;
  public busqueda:string="";
  public unidadFiltrada =[];
  public numPacientes;

  constructor(
    private _useruService:UseruService,
    private _dataService:DataService

  ) {
    this.title = 'PACIENTES EXPL. MAMA';
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
    this.loading = true;
   }

   filterPaciente = '';

  ngOnInit() {
    this.getPacientes();
  }

  getPacientes(){
    this._dataService.getdetmamaData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
       // console.log('Numero de Filas:' + numFilas);

        //procesar datos

        for(var f=0; f<numFilas; f++)
        {
          let fila:any = entries[f];

          let obj:any = {}

          for(var c=0; c<fila.length; c++)
          {
            this.celda = fila[c];

            if(f == 0)
            {
                this.campos.push(this.celda);
            }else{
              obj[this.campos[c]] = this.celda;
            }
          }

          if(f>0) this.datos.push(obj);
        }
        //console.log(this.datos);   
        this.unidadFiltrada = this.datos.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });
        //console.log(this.unidadFiltrada);
        this.numPacientes = this.unidadFiltrada.length;

        if(!this.datos){
          console.log('Error en el servidor de Datos');
          
        }else{
          this.loading = false;
        }
        
      },
      error => {
        console.log(<any>error);
        
      }
    );

  }
  
  onSearchChange(event:any){
    this.busqueda = event.detail.value;
  }

}
