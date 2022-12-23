import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Unidad } from '../../models/unidad';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UseruService]
})
export class LoginPage implements OnInit {

  public title:string;
  public subtitle:string;
  public useru: Unidad;
  public status:string;
  public token;
  public identity;
  public mensaje;

  constructor(
    private _useruService:UseruService,
    private _router: Router,
    private _route: ActivatedRoute,
    private navCtrl:NavController,

  ) {
    this.title ='BIENVENIDO A CAMU';
    this.subtitle = 'INFORMACION CANCER DE LA MUJER';
    this.useru = new Unidad(1,'','','','','','');
   }

  ngOnInit() {
    this.logout();
  }

  
  onSubmit(form){
    //  console.log(form.value);
      this._useruService.signup(this.useru).subscribe(
  
        response => {
          
          if(response.status != 'error')
          {
            this.status = 'success';
            this.token = response;
  
            this._useruService.signup(this.useru, true).subscribe(
  
              response => {
  
                this.identity = response;
                console.log(this.token);
                console.log(this.identity);
  
                localStorage.setItem('token',this.token);
                localStorage.setItem('identity',JSON.stringify(this.identity));
  
  
                //  this.navCtrl.setRoot(this.navCtrl.getActive().component);
               // this.navCtrl.navigateRoot('/home');
                this._router.navigate(['/home']);
  
              },
              error => {
                console.log(<any>error);
              }
  
            );
          }else{
            this.mensaje = response.message
            console.log(this.mensaje);
  
           
          }
  
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
        }
  
      );
    }
  
    logout(){
      this._route.params.subscribe(params =>{
          let logout = +params['sure']; //se convierte a numero con el signo +
          if(logout == 1){
            localStorage.removeItem('identity');
            localStorage.removeItem('token');
  
            this.identity = null;
            this.token = null;
            
  
            //REDIRECCION A PAGINA PRICNIPAL INICIO
           // this._router.navigate(['/login']);
           //esta fue la solucion para que cargue los datos bien en
            this.navCtrl.navigateRoot('/login', {animated:true})
  
          }
      });
    }

}
