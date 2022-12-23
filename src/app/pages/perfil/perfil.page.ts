import { Component, OnInit } from '@angular/core';
import { UseruService } from '../../services/useru.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  providers: [UseruService]
})
export class PerfilPage implements OnInit {

  public title:string;
  public token;
  public identity;

  constructor(
    private _useruService:UseruService,
    
  ) {
    this.title = 'Mi Perfil';
    this.identity = this._useruService.getIdentity();
    this.token =  this._useruService.getToken();
   }

  ngOnInit() {
    console.log(this.identity);
    
  }

}
