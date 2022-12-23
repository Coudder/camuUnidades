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

  constructor(
    private _useruService:UseruService,
    private _dataService:DataService

  ) {
    this.title ='CANCER DE LA MUJER';
    this.identity = this._useruService.getIdentity();
    this.token = this._useruService.getToken();
   }

  ngOnInit() {
  }

}
