import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


import { UseruService } from './useru.service';

@Injectable()
export class IdentityGuard implements CanActivate{

    constructor(
        private _router: Router,
        private _useruService: UseruService

    ){}
    

    canActivate(){
        let identity = this._useruService.getIdentity();

        if(identity){
            return true;
        }else {
            this._router.navigate(['/login']);
            return false;

        }
    }
}