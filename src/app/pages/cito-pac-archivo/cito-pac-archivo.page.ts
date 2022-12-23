import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-cito-pac-archivo',
  templateUrl: './cito-pac-archivo.page.html',
  styleUrls: ['./cito-pac-archivo.page.scss'],
  providers:[UseruService,DataService]
})
export class CitoPacArchivoPage implements OnInit {

  public title:string;
  public identity:any;
  public token:any;
  public id:any;
  public mensaje:boolean;
  public unidad:any;
  public pacientes:any;
  public busqueda:string="";
  public numCito:any;
  public numCitoUnidad:any;
  public numFilas:any;
  public unidadFiltrada: [];
 
  public celda:any;
  public fila:any;
  public datos:any =[];
 
  
  public campos:any=[];
  public loading : boolean;

  public numPacientes;

  constructor(
    private _useruService:UseruService,
    private _dataService:DataService

  ) {
    this.title = "ARCHIVO PACIENTES CITOLOGIAS"
    this.loading = true;
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
   }

  ngOnInit() {
    this.getcitoarchivoPac();
  }

  getcitoarchivoPac(){
    this._dataService.getcitoArchivo().subscribe(
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

        this.numCito = this.datos.length;

        this.unidadFiltrada = this.datos.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });
        console.log(this.unidadFiltrada);
        this.numPacientes = this.unidadFiltrada.length;


        if(!this.datos)
        {
          console.log('Error en el servidor de datos');
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
