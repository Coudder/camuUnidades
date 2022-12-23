import { Injectable }  from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidad } from '../models/unidad';

import { global } from '../services/global';


@Injectable()
export class UseruService {

    public url:string;
    public identity;
    public token;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    //servicio de prueba
    test(){
        return "Hola desde Servicio Usuarios de unidades";
    }

    //metodo de login
    signup(useru, gettoken = null):Observable<any>
    {
        if(gettoken != null)
        {
            useru.gettoken = 'true';
        }

        let json = JSON.stringify(useru);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'loginunidad', params, {headers:headers});

    }

    getIdentity(){ //metodo para obtener los datos del usuario del localstorage
        let identity = JSON.parse(localStorage.getItem('identity')); //obtenemos el identity del localstorage

        if(identity && identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }

    getToken(){ //metodo para obtener el token del usuario logeado
        let token = localStorage.getItem('token');

        if(token && token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;
    }
}