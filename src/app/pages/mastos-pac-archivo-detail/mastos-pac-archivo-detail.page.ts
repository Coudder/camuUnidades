import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UseruService } from '../../services/useru.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mastos-pac-archivo-detail',
  templateUrl: './mastos-pac-archivo-detail.page.html',
  styleUrls: ['./mastos-pac-archivo-detail.page.scss'],
  providers:[UseruService,DataService]
})
export class MastosPacArchivoDetailPage implements OnInit {

  public title:string;
  public identity;
  public token;
  public id;
  public paciente;

  //public numDet;
  public numFilas;

  public celda;
  public fila;
  public datos =[];

  public campos=[];
  public loading : boolean;


  constructor(
    private _useruService:UseruService,
    private _dataService:DataService,
    private _route:ActivatedRoute,
    private _router:Router

  ) {
    this.title = 'INFORMACION DEL PACIENTE';
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
    this.loading = true;
   }

  ngOnInit() {
    this.getPaciente();
  }

  getPaciente(){

    this._route.params.subscribe(params => {
      this.id = +params['id'];

      this._dataService.getmastosArchivo().subscribe(
        response => {
          let entries = response.values;
          let numFilas = entries.length;
          //console.log('Numero de Filas:' + numFilas);

          //procesar datos

          for(var f=0; f<numFilas; f++)
          {
            let fila = entries[f];

            let obj = {}

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
          this.paciente = this.datos.filter((data)=>{
            if(data.no == this.id){return data}
          });
         // console.log(this.paciente);
         
         if(!this.datos){
          console.log('Error en el servidor de datos');
         }else{
          this.loading = false;
         }

        },
        error => {
          console.log(<any>error);
          
        }
      );
    });

  }

}
