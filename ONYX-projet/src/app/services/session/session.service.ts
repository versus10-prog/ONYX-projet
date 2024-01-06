import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userName: any;

  connexion(userName: any): void{
    this.userName = userName;
  }

  deconnexion():void{
    this.userName = null;
  }

}
