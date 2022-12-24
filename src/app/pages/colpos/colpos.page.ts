import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-colpos',
  templateUrl: './colpos.page.html',
  styleUrls: ['./colpos.page.scss'],
  providers:[UseruService,DataService]
})

export class ColposPage implements OnInit {

  public title:string;
  public identity;
  public token;
  public mensaje:any;
  public loading:boolean;
  public numColpos:any;

  public numFilas:any;

   
  public celda:any;
  public fila:any;
  public datos:any =[];
 
  public campos:any=[];
  public unidadFiltrada;

  //informacion general
  public pac1vez:any;
  public pac1vezTotal:any;
  public pacsubs:any;
  public pacsubsTotal:any;
  public refxcito:any;
  public refxcitoTotal:any;
  public refxvph:any;
  public refxvphTotal:any;
  public altas:any;
  public altasTotal:any;
  public pacActivas:any;
  public pacactivasTotal:any;

  //dxRef
  public ascusTotal:any;
  public aschTotal:any;
  public vphTotal:any;
  public dismodTotal:any;
  public carepiTotal:any;
  public celendocervicalTotal:any;
  public celendometrialTotal:any;
  public celglanatipicasTotal:any;
  public adenoinsituTotal:any;
  public adenoendoTotal:any;

  //dxcolpos
  public sinalteracionesTotal:any;
  public alteracionesinflaTotal:any;
  public libgTotal:any;
  public liagTotal:any;
  public lecsugestivasTotal:any;
  public caninvasorTotal:any;
  public otrosTotal:any;

  //procedimientos
  public bxTotal:any;
  public conosTotal:any;
  public electroTotal:any;
  public lecTotal:any;
  public citocontrolTotal:any;

  //dx histologico
  public inadecDxTotal:any;
  public cervixnormalTotal:any;
  public cervicitisTotal:any;
  public vphnicTotal:any;
  public dislpaciamoderardaTotal:any;
  public displacialeveTotal:any;
  public cancermicroinvasorTotal:any;
  public cancerinvasorTotal:any;
  public adenoendoinsiTotal:any;
  public adenoinvasorTotal:any;
  public adenoendometrialinvasortotal:any;
  public sarcomaTotal:any;
  public tumormalignoTotal:any;
  public otrohistoTotla:any;


  //DX CITOLOGIAS DE CONTROL
  public citoNegativaTotal:any 
  public citoAscusTotal:any
  public citoAschTotal:any
  public citoVphTotal:any
  public citodispModeradaTotal:any
  public citocarcinomaEpidermoideTotal:any
  public citoEndocervicalesTotal:any
  public citoEndometrialesTotal:any
  public citoglandulasAtipicasTotal:any
  public citoadenoInsituTotal:any
  public citoadenoExtraTotal:any
  public citoInadecuadaTotal:any


  public status ={
    primeraVez: '1-PRIMERA VEZ',
    subs: '2-SUBSECUENTE'
  }   

  public refx = {
    citologia: '1-CITOLOGIA',
    vph: '2-VPH'
  }

  public dxRef = {
    ascus: '2-ASC-US',
    asch: '3-ASC-H',
    vph: '4-VPH, displasia leve, NIC 1',
    dismod: '5-Displasia moderada, displasia severa, carcicoma in Situ, NIC 2, NIC 3',
    carepi: '6-Carcinoma epidermoide',
    celendocervical: '7-Células glandulares endocervicales atípicas (AGC)',
    celendometrial: '8-Células glandulares endometriales atípicas (AGC)',
    celglanatipicas: '9-Células glandulares atípicas (AGC)',
    adenoinsitu: '10-Adenocarcinoma endocervical in situ',
    adenoendo: '11-Adenocarcinoma (endocervical, endometrial o extrauterino)'
  }

  public dxColpos = {
    sinAlteraciones : '1-SIN ALTERACIONES',
    alteracionesinfla: '2-ALTERACIONES INFLAMATORIAS INESPECIFICAS',
    libg: '3-LEIBG+VPH',
    liag: '4-LIAG',
    lecsugestivas: '5-LESIONES SUGESTIVAS DE INVASION NEOPLASIA INVASORA',
    caninvasor: '6-CANCER INVASOR',
    otros: '7-OTROS HALLAZGOS'
  }

  public proced = {
    bx: '1-COLPOSCOPIA+BIOPSIA',
    cono: '2-COLPOSCOPIA+CONO',
    electro: '3-COLPOSCOPIA+ELECTROFULGURACION',
    lec: '4-COLPOSCOPIA+LEC',
    citControl: '5-COLPOSCOPIA+CITOLOGIA DE CONTROL'
  }

  public dxHisto = {
    inadecDx: '1-INSUFICIENTE O INADECUADAO PARA DIAGNOSTICO',
    cervixNorma: '2-TEJIDO DE CERVIX NORMAL',
    cervicitis: '3-CERVICITIS AGUDA O CRONICA',
    vphnic: '4-VPH, NIC1 O DISPLACIA LEVE',
    displaciamoderada: '5-NIC2 O DISPLACIA MODERADA',
    displacialeve: '6-NIC3 O DISPLACIA LEVE Y CANCER IN SITU',
    cancermicroinvasor: '7-CANCER MICRO INVASOR',
    cancerinvasor: '8-CANCER INVASOR',
    adenoendoinsitu: '9-ADENOCARCINOMA ENDOCERVICAL IN SITU',
    adenoendoinvasor: '10-ADENOCARCINOMA ENDOCERVICAL INVASOR',
    adenoendometrialinvasor: '11-ADENOCARCINOMA ENDOMETRIAL INVASOR',
    sarcoma: '12-SARCOMA',
    tumormaligno: '13-TUMOR MALIGNO NO ESPECIFICADO',
    otrohisto: '14-OTRO'
  }

  public dxcitoControl = {
    citoNegativa: '15-NEGATIVA PARA LESIÓN INTRAEPITELIAL',
    citoAscus: '16-ASC-US',
    citoAsch: '17-ASC-H',
    citoVph: '18-VPH, DISPLASIA LEVE, NIC 1',
    citodispModerada: '19-DISPLASIA MODERADA, DISPLASIA SEVERA, CARCICOMA IN SITU, NIC 2, NIC 3',
    citocarcinomaEpidermoide: '20-CARCINOMA EPIDERMOIDE',
    citoEndocervicales: '21-CÉLULAS GLANDULARES ENDOCERVICALES ATÍPICAS (AGC)',
    citoEndometriales: '22--CÉLULAS GLANDULARES ENDOMETRIALES ATÍPICAS (AGC)',
    citoglandulasAtipicas: '23-CÉLULAS GLANDULARES ATÍPICAS (AGC)',
    citoadenoInsitu: '24-ADENOCARCINOMA ENDOCERVICAL IN SITU',
    citoadenoExtra: '25-ADENOCARCINOMA (ENDOCERVICAL, ENDOMETRIAL O EXTRAUTERINO)',
    citoInadecuada: '26-INADECUADA'
  }

  constructor(
    private _useruService:UseruService,
    private _dataService:DataService

  ) {
    this.title = 'COLPOSCOPIA';
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
    this.loading = true;

    this.status = {
      primeraVez: '1-PRIMERA VEZ',
      subs: '2-SUBSECUENTE'
    }

   }

  ngOnInit() {
    this.getcolposData();
  }

  getcolposData(){
    this._dataService.getcolposData().subscribe(
      response => {
        let entries = response.values;
        let numFilas = entries.length;
        //  console.log('Numero de Filas:' + numFilas);

        //procesar datos

        for (var f = 0; f < numFilas; f++) {
          let fila:any = entries[f];

          let obj:any = {};

          for (var c = 0; c < fila.length; c++) {
            this.celda = fila[c];

            if (f == 0) {
              this.campos.push(this.celda);
            } else {
              obj[this.campos[c]] = this.celda;
            }
          }

          if (f > 0) this.datos.push(obj);
        }
            //console.log(this.datos);

            this.unidadFiltrada = this.datos.filter((data)=> {
              if(data.unidadMedica == this.identity.unidad){return data}
            });
           // console.log(this.unidadFiltrada);

           this.numColpos = this.unidadFiltrada.length;
           //console.log(this.numColpos);
           

           //obtenemos los inndicadores ya teniendo la unidad Filtrada
          //PACIENTES 1 VEZ
     this.pac1vez = this.unidadFiltrada.filter((data:any)=>{
       if(data.status == this.status.primeraVez){
         return data;
       }
     });
     this.pac1vezTotal = this.pac1vez.length;
     //console.log(this.pac1vezTotal);
     //console.log(this.pac1vez);

     //PACIENTES SUBSECUENTES
     this.pacsubs = this.unidadFiltrada.filter((data:any)=>{
       if(data.status == this.status.subs){
         return data;
       }
     });
     this.pacsubsTotal = this.pacsubs.length;


     //PACIENTES REFERIDAS POR CITOLOGIA Y VPH
     this.refxcito = this.unidadFiltrada.filter((data:any)=> {
       if(data.referidaPor == this.refx.citologia){
         return data;
       }
     });
     this.refxcitoTotal = this.refxcito.length;

     this.refxvph = this.unidadFiltrada.filter((data:any)=>{
       if(data.referidaPor == this.refx.vph){
         return data;
       }
     });
     this.refxvphTotal = this.refxvph.length;

     //altas de colpos
     this.altas = this.unidadFiltrada.filter((data:any)=>{
       if(data.alta == '1-SI'){
         return data;
       }
     });
     this.altasTotal =this.altas.length;

     //PACIENTES ACTIVAS;
     this.pacActivas = this.unidadFiltrada.filter((data:any)=>{
       if(data.alta == '2-NO' || data.alta == ''){
         return data;
       }
     });
     this.pacactivasTotal = this.pacActivas.length;


     //REFERIDAS X DIAGNOSTICO////////////////////////////////////
     let ascus = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.ascus){return data}});
     this.ascusTotal = ascus.length;

     let asch = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.asch){return data}});
       this.aschTotal = asch.length;

     let vph = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.vph){return data}});
       this.vphTotal = vph.length;

     let dismod = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.dismod){return data}});
       this.dismodTotal = dismod.length;

     let carepi = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.carepi){return data}});
       this.carepiTotal = carepi.length;

     let celendocervical = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.celendocervical){return data}});
       this.celendocervicalTotal = celendocervical.length;

     let celendometrial = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.celendometrial){return data}});
       this.celendometrialTotal = celendometrial.length;

     let celglanatipicas = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.celglanatipicas){return data}});
       this.celglanatipicasTotal = celglanatipicas.length;

     let adenocervicalinsitu = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.adenoinsitu){return data}});
       this.adenoinsituTotal = adenocervicalinsitu.length;

     let adenoendo = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxReferencia == this.dxRef.adenoendo){return data}});
       this.adenoendoTotal = adenoendo.length;

     ///DXCOLPOSCOPICO

     let sinAlteracionesprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.sinAlteraciones){
         return data
       }
     })        
     let sinalteracionesprimercitaTotal = sinAlteracionesprimercita.length;
     
     
     let sinAlteracionessegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.sinAlteraciones){
         return data
       }
     })        
     let sinalteracionessegundacitaTotal = sinAlteracionessegundacita.length;
     
     

     let sinAlteracionestercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.sinAlteraciones){
         return data
       }
     })        
     let sinalteracionestercercitaTotal = sinAlteracionestercercita.length;

     
     let sinAlteracionescuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.sinAlteraciones){
         return data
       }
     })        
     let sinalteracionescuartacitaTotal = sinAlteracionescuartacita.length;

        
     let sinAlteracionesquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.sinAlteraciones){
         return data
       }
     })        
     let sinalteracionesquintacitaTotal = sinAlteracionesquintacita.length;

     //total general sin alteraciones
     this.sinalteracionesTotal = sinalteracionesprimercitaTotal+sinalteracionessegundacitaTotal+sinalteracionestercercitaTotal+sinalteracionescuartacitaTotal+sinalteracionesquintacitaTotal;
///////////////////////////////////////////////////////////////////////////////////////////
     //ALTERACIONES INFLAMATORIAS INESPECIFICAS
     let alteraInflaprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.alteracionesinfla){
         return data
       }
     })        
     let alteraInflaprimercitaTotal = alteraInflaprimercita.length;
     
     
     let alteraInflasegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.alteracionesinfla){
         return data
       }
     })        
     let alteraInflasegundacitaTotal =alteraInflasegundacita.length;
     
     

     let alteraInflatercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.alteracionesinfla){
         return data
       }
     })        
     let alteraInflatercercitaTotal = alteraInflatercercita.length;

     
     let alteraInflacuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.alteracionesinfla){
         return data
       }
     })        
     let alteraInflacuartacitaTotal = alteraInflacuartacita.length;

        
     let alteraInflaquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.alteracionesinfla){
         return data
       }
     })        
     let alteraInflaquintacitaTotal = alteraInflaquintacita.length;
     
     this.alteracionesinflaTotal = alteraInflaprimercitaTotal+alteraInflasegundacitaTotal+alteraInflatercercitaTotal+alteraInflacuartacitaTotal+alteraInflaquintacitaTotal;
     ////////////////////////////////////////////////////////
     //LEIBG+VPH
     let libgprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.libg){
         return data
       }
     })        
     let libgprimercitaTotal = libgprimercita.length;
     
     
     let libgsegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.libg){
         return data
       }
     })        
     let libgsegundacitaTotal =libgsegundacita.length;
     
     

     let libgtercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.libg){
         return data
       }
     })        
     let libgtercercitaTotal = libgtercercita.length;

     
     let libgcuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.libg){
         return data
       }
     })        
     let libgcuartacitaTotal = libgcuartacita.length;

        
     let libgquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.libg){
         return data
       }
     })        
     let libgquintacitaTotal = libgquintacita.length;

     this.libgTotal = libgprimercitaTotal+libgsegundacitaTotal+libgtercercitaTotal+libgcuartacitaTotal+libgquintacitaTotal;
     ////////////////////////////////////////////////////////////////////
     ////////////////////LIAGGGGGG/////////////////////
     let liagprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.liag){
         return data
       }
     })        
     let liagprimercitaTotal = liagprimercita.length;
     
     
     let liagsegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.liag){
         return data
       }
     })        
     let liagsegundacitaTotal =liagsegundacita.length;
     
     

     let liagtercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.liag){
         return data
       }
     })        
     let liagtercercitaTotal = liagtercercita.length;

     
     let liagcuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.liag){
         return data
       }
     })        
     let liagcuartacitaTotal = liagcuartacita.length;

        
     let liagquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.liag){
         return data
       }
     })        
     let liagquintacitaTotal = liagquintacita.length;
     
     
     this.liagTotal = liagprimercitaTotal+liagsegundacitaTotal+liagtercercitaTotal+liagcuartacitaTotal+liagquintacitaTotal;
//////////////////////////////////////////////////////////////
/////////////////////LESIONES SUGESTIVAS//////////////////////
      let lessugestivaprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.lecsugestivas){
         return data
       }
     })        
     let lessugestivaprimercitaTotal = lessugestivaprimercita.length;
     
     
     let lessugestivasegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.lecsugestivas){
         return data
       }
     })        
     let lessugestivasegundacitaTotal =lessugestivasegundacita.length;
     
     

     let lessugestivatercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.lecsugestivas){
         return data
       }
     })        
     let lessugestivatercercitaTotal = lessugestivatercercita.length;

     
     let lessugestivacuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.lecsugestivas){
         return data
       }
     })        
     let lessugestivacuartacitaTotal = lessugestivacuartacita.length;

        
     let lessugestivaquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.lecsugestivas){
         return data
       }
     })        
     let lessugestivaquintacitaTotal = lessugestivaquintacita.length;

     this.lecsugestivasTotal = lessugestivaprimercitaTotal+lessugestivasegundacitaTotal+lessugestivatercercitaTotal+lessugestivacuartacitaTotal+lessugestivaquintacitaTotal;
     /////////////////////////////////////////////////////////////////////////////////
     //////////////CANCER INVASOR////////////////////////////////////
     let cainvasorprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.caninvasor){
         return data
       }
     })        
     let cainvasorprimercitaTotal = cainvasorprimercita.length;
     
     
     let cainvasorsegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.caninvasor){
         return data
       }
     })        
     let cainvasorsegundacitaTotal =cainvasorsegundacita.length;
     
     

     let cainvasortercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.caninvasor){
         return data
       }
     })        
     let cainvasortercercitaTotal = cainvasortercercita.length;

     
     let cainvasorcuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.caninvasor){
         return data
       }
     })        
     let cainvasorcuartacitaTotal = cainvasorcuartacita.length;

        
     let cainvasorquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.caninvasor){
         return data
       }
     })        
     let cainvasorquintacitaTotal = cainvasorquintacita.length;
     
     this.caninvasorTotal = cainvasorprimercitaTotal+cainvasorsegundacitaTotal+cainvasortercercitaTotal+cainvasorcuartacitaTotal+cainvasorquintacitaTotal;
     ///////////////////////////////////////////////////////
     ////////////OTROS HALLAZGOS
     let otroshallazgosprimercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposprimerCita  == this.dxColpos.otros){
         return data
       }
     })        
     let otroshallazgosprimercitaTotal = otroshallazgosprimercita.length;
     
     
     let otroshallazgossegundacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpossegundaCita  == this.dxColpos.otros){
         return data
       }
     })        
     let otroshallazgossegundacitaTotal =otroshallazgossegundacita.length;
     
     

     let otroshallazgostercercita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolpostercerCita  == this.dxColpos.otros){
         return data
       }
     })        
     let otroshallazgostercercitaTotal = otroshallazgostercercita.length;

     
     let otroshallazgoscuartacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposcuartaCita  == this.dxColpos.otros){
         return data
       }
     })        
     let otroshallazgoscuartacitaTotal = otroshallazgoscuartacita.length;

        
     let otroshallazgosquintacita =this.unidadFiltrada.filter((data:any)=>{
       if(data.dxcolposquintaCita  == this.dxColpos.otros){
         return data
       }
     })        
     let otroshallazgosquintacitaTotal = otroshallazgosquintacita.length;

     this.otrosTotal = otroshallazgosprimercitaTotal+otroshallazgossegundacitaTotal+otroshallazgostercercitaTotal+otroshallazgoscuartacitaTotal+otroshallazgosquintacitaTotal;
     //////////////////////////////////////////////////////////////////////////////////////
     ////////////////////////////////////////////////////////////////////////////////////
     /*PROCEDIMIENTOS COLPOSCOPIAS BIOPSIAS*/ 
     let bxprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedprimerCita == this.proced.bx){return data}
     });
     let bxprimercitaTotal = bxprimerCita.length;

     let bxsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedsegundaCita == this.proced.bx){return data}
     });
     let bxsegundacitaTotal = bxsegundaCita.length;

     let bxtercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedtercerCita == this.proced.bx){return data}
     });
     let bxtercercitaTotal = bxtercerCita.length;

     let bxcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedcuartaCita == this.proced.bx){return data}
     });
     let bxcuartacitaTotal = bxcuartaCita.length;

     let bxquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedquintaCita == this.proced.bx){return data}
     });
     let bxquintacitaTotal = bxquintaCita.length;

     this.bxTotal = bxprimercitaTotal+bxsegundacitaTotal+bxtercercitaTotal+bxcuartacitaTotal+bxquintacitaTotal;
     //////////////////////////////////////////////
     /////////////////////CONOS
     let conoprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedprimerCita == this.proced.cono){return data}
     });
     let conoprimercitaTotal = conoprimerCita.length;

     let conosegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedsegundaCita == this.proced.cono){return data}
     });
     let conosegundacitaTotal = conosegundaCita.length;

     let conotercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedtercerCita == this.proced.cono){return data}
     });
     let conotercercitaTotal = conotercerCita.length;

     let conocuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedcuartaCita == this.proced.cono){return data}
     });
     let conocuartacitaTotal = conocuartaCita.length;

     let conoquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedquintaCita == this.proced.cono){return data}
     });
     let conoquintacitaTotal = conoquintaCita.length;

     this.conosTotal = conoprimercitaTotal+conosegundacitaTotal+conotercercitaTotal+conocuartacitaTotal+conoquintacitaTotal;
     ///////////////////////////////////////////////////////
     /////////////////ELECTROFULGURACION
     let electroprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedprimerCita == this.proced.electro){return data}
     });
     let electroprimercitaTotal = electroprimerCita.length;

     let electrosegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedsegundaCita == this.proced.electro){return data}
     });
     let electrosegundacitaTotal = electrosegundaCita.length;

     let electrotercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedtercerCita == this.proced.electro){return data}
     });
     let electrotercercitaTotal = electrotercerCita.length;

     let electrocuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedcuartaCita == this.proced.electro){return data}
     });
     let electrocuartacitaTotal = electrocuartaCita.length;

     let electroquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedquintaCita == this.proced.electro){return data}
     });
     let electroquintacitaTotal = electroquintaCita.length;

     this.electroTotal = electroprimercitaTotal+electrosegundacitaTotal+electrotercercitaTotal+electrocuartacitaTotal+electroquintacitaTotal;
     //////////////////////////////////////////////////////////
     ////////////////////////LEC///////////
     let lecprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedprimerCita == this.proced.lec){return data}
     });
     let lecprimercitaTotal = lecprimerCita.length;

     let lecsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedsegundaCita == this.proced.lec){return data}
     });
     let lecsegundacitaTotal = lecsegundaCita.length;

     let lectercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedtercerCita == this.proced.lec){return data}
     });
     let lectercercitaTotal = lectercerCita.length;

     let leccuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedcuartaCita == this.proced.lec){return data}
     });
     let leccuartacitaTotal = leccuartaCita.length;

     let lecquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedquintaCita == this.proced.lec){return data}
     });
     let lecquintacitaTotal = lecquintaCita.length;

     this.lecTotal = lecprimercitaTotal+lecsegundacitaTotal+lectercercitaTotal+leccuartacitaTotal+lecquintacitaTotal;
     ////////////////////////////////////////////
     /////////////CITOLOGIAS DE CONTROL
     let citocontrolprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedprimerCita == this.proced.citControl){return data}
     });
     let citocontrolprimercitaTotal = citocontrolprimerCita.length;

     let citocontrolsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedsegundaCita == this.proced.citControl){return data}
     });
     let citocontrolsegundacitaTotal = citocontrolsegundaCita.length;

     let citocontroltercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedtercerCita == this.proced.citControl){return data}
     });
     let citocontroltercercitaTotal = citocontroltercerCita.length;

     let citocontrolcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedcuartaCita == this.proced.citControl){return data}
     });
     let citocontrolcuartacitaTotal = citocontrolcuartaCita.length;

     let citocontrolquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.procedquintaCita == this.proced.citControl){return data}
     });
     let citocontrolquintacitaTotal = citocontrolquintaCita.length;

     this.citocontrolTotal = citocontrolprimercitaTotal+citocontrolsegundacitaTotal+citocontroltercercitaTotal+citocontrolcuartacitaTotal+citocontrolquintacitaTotal;
     

     /////////////////////////////////////////////////////////////
     //////////////////////DX HISTOLOGICO
     let inadxprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.inadecDx){return data;}
     });
     let inadxprimercitaTotal = inadxprimerCita.length;

     let inadxsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.inadecDx){return data;}
     });
     let inadxsegundacitaTotal = inadxsegundaCita.length;

     let inadxtercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.inadecDx){return data;}
     });
     let inadxtercercitaTotal = inadxtercerCita.length;
     
     let inadxcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.inadecDx){return data;}
     });
     let inadxcuartacitaTotal = inadxcuartaCita.length;
     
     let inadxquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.inadecDx){return data;}
     });
     let inadxquintacitaTotal = inadxquintaCita.length;

     this.inadecDxTotal = inadxprimercitaTotal+inadxsegundacitaTotal+inadxtercercitaTotal+inadxcuartacitaTotal+inadxquintacitaTotal;

     //////////////////////////////////////////CERVIX NORMAL
     let cervixnormalprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.cervixNorma){return data;}
     });
     let cervixnormalprimercitaTotal = cervixnormalprimerCita.length;

     let cervixnormalsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.cervixNorma){return data;}
     });
     let cervixnormalsegundacitaTotal = cervixnormalsegundaCita.length;

     let cervixnormaltercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.cervixNorma){return data;}
     });
     let cervixnormaltercercitaTotal = cervixnormaltercerCita.length;
     
     let cervixnormalcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.cervixNorma){return data;}
     });
     let cervixnormalcuartacitaTotal = cervixnormalcuartaCita.length;
     
     let cervixnormalquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.cervixNorma){return data;}
     });
     let cervixnormalquintacitaTotal = cervixnormalquintaCita.length;

     this.cervixnormalTotal = cervixnormalprimercitaTotal+cervixnormalsegundacitaTotal+cervixnormaltercercitaTotal+cervixnormalcuartacitaTotal+cervixnormalquintacitaTotal;

     ///////////////////////////VPH NIC1 O DSSPLACIA LEVE
     let vphnicprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.vphnic){return data;}
     });
     let vphnicprimercitaTotal = vphnicprimerCita.length;

     let vphnicsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.vphnic){return data;}
     });
     let vphnicsegundacitaTotal = vphnicsegundaCita.length;

     let vphnictercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.vphnic){return data;}
     });
     let vphnictercercitaTotal = vphnictercerCita.length;
     
     let vphniccuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.vphnic){return data;}
     });
     let vphniccuartacitaTotal = vphniccuartaCita.length;
     
     let vphnicquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.vphnic){return data;}
     });
     let vphnicquintacitaTotal = vphnicquintaCita.length;

     this.vphnicTotal = vphnicprimercitaTotal+vphnicsegundacitaTotal+vphnictercercitaTotal+vphniccuartacitaTotal+vphnicquintacitaTotal;

     /////////////////////////////DISPLACIA MODERADA NIC2
     let displaciamoderadaprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.displaciamoderada){return data;}
     });
     let displaciamoderadaprimercitaTotal = displaciamoderadaprimerCita.length;

     let displaciamoderadasegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.displaciamoderada){return data;}
     });
     let displaciamoderadasegundacitaTotal = displaciamoderadasegundaCita.length;

     let displaciamoderadatercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.displaciamoderada){return data;}
     });
     let displaciamoderadatercercitaTotal = displaciamoderadatercerCita.length;
     
     let displaciamoderadacuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.displaciamoderada){return data;}
     });
     let displaciamoderadacuartacitaTotal = displaciamoderadacuartaCita.length;
     
     let displaciamoderadaquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.displaciamoderada){return data;}
     });
     let displaciamoderadaquintacitaTotal = displaciamoderadaquintaCita.length;

     this.dislpaciamoderardaTotal = displaciamoderadaprimercitaTotal+displaciamoderadasegundacitaTotal+displaciamoderadatercercitaTotal+displaciamoderadacuartacitaTotal+displaciamoderadaquintacitaTotal;

     ///////////////////////////////////////DISPLACIA LEVE nic3
     let displacialeveprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.displacialeve){return data;}
     });
     let displacialeveprimercitaTotal = displacialeveprimerCita.length;

     let displacialevesegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.displacialeve){return data;}
     });
     let displacialevesegundacitaTotal = displacialevesegundaCita.length;

     let displacialevetercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.displacialeve){return data;}
     });
     let displacialevetercercitaTotal = displacialevetercerCita.length;
     
     let displacialevecuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.displacialeve){return data;}
     });
     let displacialevecuartacitaTotal = displacialevecuartaCita.length;
     
     let displacialevequintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.displacialeve){return data;}
     });
     let displacialevequintacitaTotal = displacialevequintaCita.length;

     this.displacialeveTotal = displacialeveprimercitaTotal+displacialevesegundacitaTotal+displacialevetercercitaTotal+displacialevecuartacitaTotal+displacialevequintacitaTotal;

     /////////////////CANCER MICRO INVASOR
     let cancermicroprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.cancermicroinvasor){return data;}
     });
     let cancermicroprimercitaTotal = cancermicroprimerCita.length;

     let cancermicrosegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.cancermicroinvasor){return data;}
     });
     let cancermicrosegundacitaTotal = cancermicrosegundaCita.length;

     let cancermicrotercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.cancermicroinvasor){return data;}
     });
     let cancermicrotercercitaTotal = cancermicrotercerCita.length;
     
     let cancermicrocuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.cancermicroinvasor){return data;}
     });
     let cancermicrocuartacitaTotal = cancermicrocuartaCita.length;
     
     let cancermicroquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.cancermicroinvasor){return data;}
     });
     let cancermicroquintacitaTotal = cancermicroquintaCita.length;

     this.cancermicroinvasorTotal = cancermicroprimercitaTotal+cancermicrosegundacitaTotal+cancermicrotercercitaTotal+cancermicrocuartacitaTotal+cancermicroquintacitaTotal;



     /////////////////////////////CANCER INVASOR
     let canverinvasorprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.cancerinvasor){return data;}
     });
     let canverinvasorprimercitaTotal = canverinvasorprimerCita.length;

     let canverinvasorsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.cancerinvasor){return data;}
     });
     let canverinvasorsegundacitaTotal = canverinvasorsegundaCita.length;

     let canverinvasortercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.cancerinvasor){return data;}
     });
     let canverinvasortercercitaTotal = canverinvasortercerCita.length;
     
     let canverinvasorcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.cancerinvasor){return data;}
     });
     let canverinvasorcuartacitaTotal = canverinvasorcuartaCita.length;
     
     let canverinvasorquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.cancerinvasor){return data;}
     });
     let canverinvasorquintacitaTotal = canverinvasorquintaCita.length;


     this.cancerinvasorTotal = canverinvasorprimercitaTotal+canverinvasorsegundacitaTotal+canverinvasortercercitaTotal+canverinvasorcuartacitaTotal+canverinvasorquintacitaTotal;

     ////////////////////adenocarcinoma endocervical insitu
     let adenoinsituprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.adenoendoinsitu){return data;}
     });
     let adenoinsituprimercitaTotal = adenoinsituprimerCita.length;

     let adenoinsitusegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.adenoendoinsitu){return data;}
     });
     let adenoinsitusegundacitaTotal = adenoinsitusegundaCita.length;

     let adenoinsitutercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.adenoendoinsitu){return data;}
     });
     let adenoinsitutercercitaTotal = adenoinsitutercerCita.length;
     
     let adenoinsitucuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.adenoendoinsitu){return data;}
     });
     let adenoinsitucuartacitaTotal = adenoinsitucuartaCita.length;
     
     let adenoinsituquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.adenoendoinsitu){return data;}
     });
     let adenoinsituquintacitaTotal = adenoinsituquintaCita.length;

     this.adenoinsituTotal = adenoinsituprimercitaTotal+adenoinsitusegundacitaTotal+adenoinsitutercercitaTotal+adenoinsitucuartacitaTotal+adenoinsituquintacitaTotal;
 
     //////////////////////////////////////adenoinvasor
     let adenoinvasorprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.adenoendoinvasor){return data;}
     });
     let adenoinvasorprimercitaTotal = adenoinvasorprimerCita.length;

     let adenoinvasorsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.adenoendoinvasor){return data;}
     });
     let adenoinvasorsegundacitaTotal = adenoinvasorsegundaCita.length;

     let adenoinvasortercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.adenoendoinvasor){return data;}
     });
     let adenoinvasortercercitaTotal = adenoinvasortercerCita.length;
     
     let adenoinvasorcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.adenoendoinvasor){return data;}
     });
     let adenoinvasorcuartacitaTotal = adenoinvasorcuartaCita.length;
     
     let adenoinvasorquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.adenoendoinvasor){return data;}
     });
     let adenoinvasorquintacitaTotal = adenoinvasorquintaCita.length;

     this.adenoinvasorTotal = adenoinvasorprimercitaTotal+adenoinvasorsegundacitaTotal+adenoinvasortercercitaTotal+adenoinvasorcuartacitaTotal+adenoinvasorquintacitaTotal;

     /////////////ENDOMETRIAL INVASOR
     let endometrialinvasorprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.adenoendometrialinvasor){return data;}
     });
     let endometrialinvasorprimercitaTotal = endometrialinvasorprimerCita.length;

     let endometrialinvasorsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.adenoendometrialinvasor){return data;}
     });
     let endometrialinvasorsegundacitaTotal = endometrialinvasorsegundaCita.length;

     let endometrialinvasortercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.adenoendometrialinvasor){return data;}
     });
     let endometrialinvasortercercitaTotal = endometrialinvasortercerCita.length;
     
     let endometrialinvasorcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.adenoendometrialinvasor){return data;}
     });
     let endometrialinvasorcuartacitaTotal = endometrialinvasorcuartaCita.length;
     
     let endometrialinvasorquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.adenoendometrialinvasor){return data;}
     });
     let endometrialinvasorquintacitaTotal = endometrialinvasorquintaCita.length;        

       this.adenoendometrialinvasortotal = endometrialinvasorprimercitaTotal+endometrialinvasorsegundacitaTotal+endometrialinvasortercercitaTotal+endometrialinvasorcuartacitaTotal+endometrialinvasorquintacitaTotal;

     ////////////////////SARCOMA
     let sarcomaprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.sarcoma){return data;}
     });
     let sarcomaprimercitaTotal = sarcomaprimerCita.length;

     let sarcomasegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.sarcoma){return data;}
     });
     let sarcomasegundacitaTotal = sarcomasegundaCita.length;

     let sarcomatercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.sarcoma){return data;}
     });
     let sarcomatercercitaTotal = sarcomatercerCita.length;
     
     let sarcomacuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.sarcoma){return data;}
     });
     let sarcomacuartacitaTotal = sarcomacuartaCita.length;
     
     let sarcomaquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.sarcoma){return data;}
     });
     let sarcomaquintacitaTotal = sarcomaquintaCita.length;   


     this.sarcomaTotal = sarcomaprimercitaTotal+sarcomasegundacitaTotal+sarcomatercercitaTotal+sarcomacuartacitaTotal+sarcomaquintacitaTotal;

     /////////////////////TUMOR MALIGNO NO ESPECIFICADO
     let tumornodxprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.tumormaligno){return data;}
     });
     let tumornodxprimercitaTotal = tumornodxprimerCita.length;

     let tumornodxsegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.tumormaligno){return data;}
     });
     let tumornodxsegundacitaTotal = tumornodxsegundaCita.length;

     let tumornodxtercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.tumormaligno){return data;}
     });
     let tumornodxtercercitaTotal = tumornodxtercerCita.length;
     
     let tumornodxcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.tumormaligno){return data;}
     });
     let tumornodxcuartacitaTotal = tumornodxcuartaCita.length;
     
     let tumornodxquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.tumormaligno){return data;}
     });
     let tumornodxquintacitaTotal = tumornodxquintaCita.length;   

     this.tumormalignoTotal = tumornodxprimercitaTotal+tumornodxsegundacitaTotal+tumornodxtercercitaTotal+tumornodxcuartacitaTotal+tumornodxquintacitaTotal;


     ///////////OTROS DX HISTOLOGICO
     let otrodxhistoprimerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoprimerCita == this.dxHisto.otrohisto){return data;}
     });
     let otrodxhistoprimercitaTotal = otrodxhistoprimerCita.length;

     let otrodxhistosegundaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistosegundaCita == this.dxHisto.otrohisto){return data;}
     });
     let otrodxhistosegundacitaTotal = otrodxhistosegundaCita.length;

     let otrodxhistotercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxHisto.otrohisto){return data;}
     });
     let otrodxhistotercercitaTotal = otrodxhistotercerCita.length;
     
     let otrodxhistocuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxHisto.otrohisto){return data;}
     });
     let otrodxhistocuartacitaTotal = otrodxhistocuartaCita.length;
     
     let otrodxhistoquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxHisto.otrohisto){return data;}
     });
     let otrodxhistoquintacitaTotal = otrodxhistoquintaCita.length;   

     this.otrohistoTotla = otrodxhistoprimercitaTotal+otrodxhistosegundacitaTotal+otrodxhistotercercitaTotal+otrodxhistocuartacitaTotal+otrodxhistoquintacitaTotal;
     
     //////////DX CITOLOGIAS DE CONTROL
     ////citologias negativas
     let citonegativaprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoNegativa){return data;}
     });
     let citonegativaprimeracitaTotal = citonegativaprimerCita.length;

     let citonegativasegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoNegativa){return data;}
     });
     let citonegativasegundacitaTotal = citonegativasegundaCita.length;

     let citonegativatercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoNegativa){return data;}
     });
     let citonegativatercercitaTotal = citonegativatercerCita.length;

     let citonegativacuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoNegativa){return data;}
     });
     let citonegativacuartacitaTotal = citonegativacuartaCita.length;

     let citonegativaquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoNegativa){return data;}
     });
     let citonegativaquintacitaTotal = citonegativaquintaCita.length;

     this.citoNegativaTotal = citonegativaprimeracitaTotal+citonegativasegundacitaTotal+citonegativatercercitaTotal+citonegativacuartacitaTotal+citonegativaquintacitaTotal;
     
     /////////////////////////////DX CITOLOGIAS DE CONTROL ASCUS
     let citoascusprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoAscus){return data;}
     });
     let citoascusprimeracitaTotal = citoascusprimerCita.length;

     let citoascussegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoAscus){return data;}
     });
     let citoascussegundacitaTotal = citoascussegundaCita.length;

     let citoascustercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoAscus){return data;}
     });
     let citoascustercercitaTotal = citoascustercerCita.length;

     let citoascuscuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoAscus){return data;}
     });
     let citoascuscuartacitaTotal = citoascuscuartaCita.length;

     let citoascusquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoAscus){return data;}
     });
     let citoascusquintacitaTotal = citoascusquintaCita.length;

     this.citoAscusTotal = citoascusprimeracitaTotal+citoascussegundacitaTotal+citoascustercercitaTotal+citoascuscuartacitaTotal+citoascusquintacitaTotal;

     ///////////////DX CITOLOGIAS DE CONTROL ASCH
     let citoaschprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoAsch){return data;}
     });
     let citoaschprimeracitaTotal = citoaschprimerCita.length;

     let citoaschsegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoAsch){return data;}
     });
     let citoaschsegundacitaTotal = citoaschsegundaCita.length;

     let citoaschtercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoAsch){return data;}
     });
     let citoaschtercercitaTotal = citoaschtercerCita.length;

     let citoaschcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoAsch){return data;}
     });
     let citoaschcuartacitaTotal = citoaschcuartaCita.length;

     let citoaschquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoAsch){return data;}
     });
     let citoaschquintacitaTotal = citoaschquintaCita.length;

     this.aschTotal = citoaschprimeracitaTotal+citoaschsegundacitaTotal+citoaschtercercitaTotal+citoaschcuartacitaTotal+citoaschquintacitaTotal;

     //////////////////citologia de control dx vph
     let citovphprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoVph){return data;}
     });
     let citovphprimeracitaTotal = citovphprimerCita.length;

     let citovphsegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoVph){return data;}
     });
     let citovphsegundacitaTotal = citovphsegundaCita.length;

     let citovphtercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoVph){return data;}
     });
     let citovphtercercitaTotal = citovphtercerCita.length;

     let citovphcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoVph){return data;}
     });
     let citovphcuartacitaTotal = citovphcuartaCita.length;

     let citovphquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoVph){return data;}
     });
     let citovphquintacitaTotal = citovphquintaCita.length;


     this.citoVphTotal = citovphprimeracitaTotal+citovphsegundacitaTotal+citovphtercercitaTotal+citovphcuartacitaTotal+citovphquintacitaTotal;
     
     //////////////////////////////cito displacia moderada
     let citodispmoderadaprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citodispModerada){return data;}
     });
     let citodispmoderadaprimeracitaTotal = citodispmoderadaprimerCita.length;

     let citodispmoderadasegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citodispModerada){return data;}
     });
     let citodispmoderadasegundacitaTotal = citodispmoderadasegundaCita.length;

     let citodispmoderadatercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citodispModerada){return data;}
     });
     let citodispmoderadatercercitaTotal = citodispmoderadatercerCita.length;

     let citodispmoderadacuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citodispModerada){return data;}
     });
     let citodispmoderadacuartacitaTotal = citodispmoderadacuartaCita.length;

     let citodispmoderadaquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citodispModerada){return data;}
     });
     let citodispmoderadaquintacitaTotal = citodispmoderadaquintaCita.length;

     this.citodispModeradaTotal = citodispmoderadaprimeracitaTotal+citodispmoderadasegundacitaTotal+citodispmoderadatercercitaTotal+citodispmoderadacuartacitaTotal+citodispmoderadaquintacitaTotal;


     ///CITOLOGIA DX CARCINOMA
     let citocarcinomaprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citocarcinomaEpidermoide){return data;}
     });
     let citocarcinomaprimeracitaTotal = citocarcinomaprimerCita.length;

     let citocarcinomasegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citocarcinomaEpidermoide){return data;}
     });
     let citocarcinomasegundacitaTotal = citocarcinomasegundaCita.length;

     let citocarcinomatercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citocarcinomaEpidermoide){return data;}
     });
     let citocarcinomatercercitaTotal = citocarcinomatercerCita.length;

     let citocarcinomacuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citocarcinomaEpidermoide){return data;}
     });
     let citocarcinomacuartacitaTotal = citocarcinomacuartaCita.length;

     let citocarcinomaquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citocarcinomaEpidermoide){return data;}
     });
     let citocarcinomaquintacitaTotal = citocarcinomaquintaCita.length;

     this.citocarcinomaEpidermoideTotal = citocarcinomaprimeracitaTotal+citocarcinomasegundacitaTotal+citocarcinomatercercitaTotal+citocarcinomacuartacitaTotal+citocarcinomaquintacitaTotal;

     //////////cito celulas endocervicales
     let citoendocervicalprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoEndocervicales){return data;}
     });
     let citoendocervicalprimeracitaTotal = citoendocervicalprimerCita.length;

     let citoendocervicalsegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoEndocervicales){return data;}
     });
     let citoendocervicalsegundacitaTotal = citoendocervicalsegundaCita.length;

     let citoendocervicaltercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoEndocervicales){return data;}
     });
     let citoendocervicaltercercitaTotal = citoendocervicaltercerCita.length;

     let citoendocervicalcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoEndocervicales){return data;}
     });
     let citoendocervicalcuartacitaTotal = citoendocervicalcuartaCita.length;

     let citoendocervicalquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoEndocervicales){return data;}
     });
     let citoendocervicalquintacitaTotal = citoendocervicalquintaCita.length;

     this.citoEndocervicalesTotal = citoendocervicalprimeracitaTotal+citoendocervicalsegundacitaTotal+citoendocervicaltercercitaTotal+citoendocervicalcuartacitaTotal+citoendocervicalquintacitaTotal;

     /////////////////////CITOLOGIAS DE CONTROL ENDOMETRIALES
     let citoendometrialprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoEndometriales){return data;}
     });
     let citoendometrialprimeracitaTotal = citoendometrialprimerCita.length;

     let citoendometrialsegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoEndometriales){return data;}
     });
     let citoendometrialsegundacitaTotal = citoendometrialsegundaCita.length;

     let citoendometrialtercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoEndometriales){return data;}
     });
     let citoendometrialtercercitaTotal = citoendometrialtercerCita.length;

     let citoendometrialcuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoEndometriales){return data;}
     });
     let citoendometrialcuartacitaTotal = citoendometrialcuartaCita.length;

     let citoendometrialquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoEndometriales){return data;}
     });
     let citoendometrialquintacitaTotal = citoendometrialquintaCita.length;        

     this.citoEndometrialesTotal = citoendometrialprimeracitaTotal+citoendometrialsegundacitaTotal+citoendometrialtercercitaTotal+citoendometrialcuartacitaTotal+citoendometrialquintacitaTotal;

     /////////////////////CITO DX CELULAS GLANDULARES ATIPICAS
     let citoglanatipicasprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoglandulasAtipicas){return data;}
     });
     let citoglanatipicasprimeracitaTotal = citoglanatipicasprimerCita.length;

     let citoglanatipicassegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoglandulasAtipicas){return data;}
     });
     let citoglanatipicassegundacitaTotal = citoglanatipicassegundaCita.length;

     let citoglanatipicastercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoglandulasAtipicas){return data;}
     });
     let citoglanatipicastercercitaTotal = citoglanatipicastercerCita.length;

     let citoglanatipicascuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoglandulasAtipicas){return data;}
     });
     let citoglanatipicascuartacitaTotal = citoglanatipicascuartaCita.length;

     let citoglanatipicasquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoglandulasAtipicas){return data;}
     });
     let citoglanatipicasquintacitaTotal = citoglanatipicasquintaCita.length;    

     this.citoglandulasAtipicasTotal = citoglanatipicasprimeracitaTotal+citoglanatipicassegundacitaTotal+citoglanatipicastercercitaTotal+citoglanatipicascuartacitaTotal+citoglanatipicasquintacitaTotal;

     ////////////////////cito dx ADENO insitu
     let citoadenoinsituprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoadenoInsitu){return data;}
     });
     let citoadenoinsituprimeracitaTotal = citoadenoinsituprimerCita.length;

     let citoadenoinsitusegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoadenoInsitu){return data;}
     });
     let citoadenoinsitusegundacitaTotal = citoadenoinsitusegundaCita.length;

     let citoadenoinsitutercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoadenoInsitu){return data;}
     });
     let citoadenoinsitutercercitaTotal = citoadenoinsitutercerCita.length;

     let citoadenoinsitucuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoadenoInsitu){return data;}
     });
     let citoadenoinsitucuartacitaTotal = citoadenoinsitucuartaCita.length;

     let citoadenoinsituquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoadenoInsitu){return data;}
     });
     let citoadenoinsituquintacitaTotal = citoadenoinsituquintaCita.length;   

     this.citoadenoInsituTotal = citoadenoinsituprimeracitaTotal+citoadenoinsitusegundacitaTotal+citoadenoinsitutercercitaTotal+citoadenoinsitucuartacitaTotal+citoadenoinsituquintacitaTotal;

     ///////////cito dx  ADENO EXTRAUTERINO
     let citoadenoextraprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoadenoExtra){return data;}
     });
     let citoadenoextraprimeracitaTotal = citoadenoextraprimerCita.length;

     let citoadenoextrasegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoadenoExtra){return data;}
     });
     let citoadenoextrasegundacitaTotal = citoadenoextrasegundaCita.length;

     let citoadenoextratercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoadenoExtra){return data;}
     });
     let citoadenoextratercercitaTotal = citoadenoextratercerCita.length;

     let citoadenoextracuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoadenoExtra){return data;}
     });
     let citoadenoextracuartacitaTotal = citoadenoextracuartaCita.length;

     let citoadenoextraquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoadenoExtra){return data;}
     });
     let citoadenoextraquintacitaTotal = citoadenoextraquintaCita.length;   

     this.citoadenoExtraTotal = citoadenoextraprimeracitaTotal+citoadenoextrasegundacitaTotal+citoadenoextratercercitaTotal+citoadenoextracuartacitaTotal+citoadenoextraquintacitaTotal;

     /////////////CITO DX INADECUADAS
     let citoinadecuadaprimerCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistoprimerCita == this.dxcitoControl.citoInadecuada){return data;}
     });
     let citoinadecuadaprimeracitaTotal = citoinadecuadaprimerCita.length;

     let citoinadecuadasegundaCita = this.unidadFiltrada.filter((data:any)=> {
       if(data.dxhistosegundaCita == this.dxcitoControl.citoInadecuada){return data;}
     });
     let citoinadecuadasegundacitaTotal = citoinadecuadasegundaCita.length;

     let citoinadecuadatercerCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistotercerCita == this.dxcitoControl.citoInadecuada){return data;}
     });
     let citoinadecuadatercercitaTotal = citoinadecuadatercerCita.length;

     let citoinadecuadacuartaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistocuartaCita == this.dxcitoControl.citoInadecuada){return data;}
     });
     let citoinadecuadacuartacitaTotal = citoinadecuadacuartaCita.length;

     let citoinadecuadaquintaCita = this.unidadFiltrada.filter((data:any)=>{
       if(data.dxhistoquintaCita == this.dxcitoControl.citoInadecuada){return data;}
     });
     let citoinadecuadaquintacitaTotal = citoinadecuadaquintaCita.length;   

     this.citoInadecuadaTotal = citoinadecuadaprimeracitaTotal+citoinadecuadasegundacitaTotal+citoinadecuadatercercitaTotal+citoinadecuadacuartacitaTotal+citoinadecuadaquintacitaTotal;
     

     if(!this.datos)
     {
       console.log("Error en el Servidor")
     }else{
       this.loading = false;
     }

            

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

}
