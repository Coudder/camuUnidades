import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [UseruService,DataService]
})
export class HomePage implements OnInit {

  public title:string;
  public identity;
  public token;
  public loading:boolean;

  public numCito;
  public numVph;
  public numDet;
  public numMasto;
  public numColpos;
  public unidadFiltrada;
  public yearInfo;
  public uniBackend;

  public numFilas;
  public totalUnidades;

  public celda;
  public fila;
  public datosCito =[];
  public camposCito=[];
  public datosVph=[];
  public camposVph =[];
  public datosDet=[];
  public camposDet=[];
  public datosMasto=[];
  public camposMasto=[];
  public datosColpos=[];
  public camposColpos=[];
  
  public unidadFiltradacitos = [];
  public unidadFiltradavphs = [];
  public unidadFiltradadet = [];
  public unidadFiltradamastos = [];
  public unidadFiltradacolpos = [];
  


  //public citoplus = [];
  //public values=[];
  //public unidadesCitos;

 // public toptomasCito = [];
  //public map;
  //public newObj


  constructor(
    private _useruService:UseruService,
    private _dataService:DataService

  ) {
    this.title ='CANCER DE LA MUJER';
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
    this.loading = true;
   }

  ngOnInit() {
    this.getcitoData();
    this.getvphData();
    this.getdetData();
    this.getmastoData();
    this.getcolposData();
    this.getunidaBackend();
    //console.log(this.identity);
    
  }

  ngDoCheck() {
    this.loadUser();

  }

  loadUser() {
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
    //console.log(this.identity);

  }


  getcitoData(){
    this._dataService.getcitoData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposCito.push(this.celda);
            }else{
              obj[this.camposCito[c]] = this.celda;
            }
          }
          if(f>0) this.datosCito.push(obj);
        }
        //console.log(this.datosCito);

        this.unidadFiltradacitos = this.datosCito.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });
        this.numCito = this.unidadFiltradacitos.length;
        //console.log('Citologias: '+this.numCito);

        if(!this.datosCito){
          console.log('Error en el servidor de Datos');
        }else {
          this.loading = false;
        }

      },
      error =>{
        console.log(<any>error);
        
      }
    );

  }

  getvphData(){
    this._dataService.getVphData().subscribe(
      response => { 
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposVph.push(this.celda);
            }else{
              obj[this.camposVph[c]] = this.celda;
            }
          }
          if(f>0) this.datosVph.push(obj);
        }

        this.unidadFiltradavphs = this.datosVph.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });

        this.numVph = this.unidadFiltradavphs.length;
       // console.log( "Vphs: "+this.numVph);
        if(!this.datosVph){
          console.log('Error en el servidor de datos');
        }else{
          this.loading = false;
        }

      },
      error =>{
        console.log(<any>error);
        
      }
    );
  }

  getdetData(){
    this._dataService.getdetmamaData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposDet.push(this.celda);
            }else{
              obj[this.camposDet[c]] = this.celda;
            }
          }
          if(f>0) this.datosDet.push(obj);
        }
        //console.log(this.datosCito);

        this.unidadFiltradadet = this.datosDet.filter((data)=> {
          if(data.unidadMedica == this.identity.unidad){return data}
        });

        this.numDet = this.unidadFiltradadet.length;
        //console.log("Detecciones: "+this.numDet);

        if(!this.datosDet){
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

  getmastoData(){
    this._dataService.getmastosData().subscribe(
      response =>{
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposMasto.push(this.celda);
            }else{
              obj[this.camposMasto[c]] = this.celda;
            }
          }
          if(f>0) this.datosMasto.push(obj);
        }
        //console.log(this.datosCito);
        this.unidadFiltradamastos = this.datosMasto.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });
        this.numMasto = this.unidadFiltradamastos.length;
        //console.log('mastos: '+this.numMasto);

        if(!this.datosMasto){
          console.log('Error en el servidor de datos')
        }else{
          this.loading = false;
        }
      },
      error =>{
        console.log(<any>error);
        
      }
    );
  }

  getcolposData(){
    this._dataService.getcolposData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
      //  console.log('Numero de Filas:' + numFilas);

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
                this.camposColpos.push(this.celda);
            }else{
              obj[this.camposColpos[c]] = this.celda;
            }
          }
          if(f>0) this.datosColpos.push(obj);
        }
        //console.log(this.datosCito);
        this.unidadFiltradacolpos = this.datosColpos.filter((data)=>{
          if(data.unidadMedica == this.identity.unidad){return data}
        });
        this.numColpos = this.unidadFiltradacolpos.length;
        //console.log('Colpos: '+this.numColpos);

        if(!this.datosColpos){
          console.log('Error en el servidor de Datos')
        }else{
          this.loading = false;
        }

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

  getunidaBackend(){

    //OBTENEOS SOLO EL AÑO
    this._dataService.getCitoByUnidad(this.identity.sub).subscribe(
      response => {
        if(response.status == 'success'){
          this.yearInfo = response.infoxunidad 
          //console.log(this.yearInfo);
        }

        if(!this.yearInfo){
          console.log('Error al obtener los datos');
          
        }

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

}
