import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cito-pacientes-detail',
  templateUrl: './cito-pacientes-detail.page.html',
  styleUrls: ['./cito-pacientes-detail.page.scss'],
  providers: [UseruService,DataService]
})
export class CitoPacientesDetailPage implements OnInit {

  public title:string;
  public identity;
  public token;
  public id:any;
  public paciente:any;

  public numCito:any;
  public numFilas:any;

  public unidadM:any
  public celda:any;
  public fila:any;
  public datos:any =[];

  public unidadFiltrada:any

  public campos:any=[];
  public loading : boolean;


  constructor(
    private _useruService:UseruService,
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router

  ) {
    this.title = "INFORMACION DEL PACIENTE";
    this.identity = this._useruService.getIdentity();
    this.token =  this._useruService.getToken();
    this.loading = true;
   }

  ngOnInit() {
    this.getPaciente();
  }

  getPaciente(){
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      //console.log(this.id);
      
      this._dataService.getcitoData().subscribe(
        response =>{

          let entries = response.values;
                let numFilas = entries.length;
                //console.log('Numero de Filas:' + numFilas);

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

                this.paciente = this.datos.filter((data:any)=> {
                  if(data.no == this.id){
                    return data;
                  }
                });
                console.log(this.paciente);

                if(!this.paciente)
                {
                  console.log('Error en servidor de datos');
                }else{
                  this.loading=false;
                }
                



        },
        error => {
          console.log(<any>error);
          
        }
      );



    }
    );



  }

}
