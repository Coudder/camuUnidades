import { Component } from '@angular/core';
import { UseruService } from './services/useru.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [UseruService]
})
export class AppComponent {

  public open=false;
  
  public identity;
  public token;

  public pages:any[] = [

    {
      icon: 'home',
      title: 'Inicio',
      redirecTo: '/home'
    },
    {
      icon: 'person',
      title: 'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon: 'chevron-forward-outline',
      title: 'Ca Mujer',
      children: [
        {
          icon: 'medkit',
          title: 'Citologias',
          reditecTo: '/citologias'
        },
        {
          icon: 'medkit',
          title: 'Vphs',
          reditecTo: '/vphs'
        },
        {
          icon: 'medkit',
          title: 'Expl. Clinic. Mama',
          reditecTo: '/detecmama'
        },
        {
          icon: 'medkit',
          title: 'Mastografias',
          reditecTo: '/mastos'
        },
        {
          icon: 'medkit',
          title: 'Colposcopia',
          reditecTo: '/colpos'
        },
        
       
      ]
    },
    // {
    //    icon: 'power',
    //    title: 'Cerrar Sesión',
    //    redirecTo: '/logout/1',
    //  },
  ];

  constructor(
    private _useruService:UseruService

  ) {
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
  }
}
