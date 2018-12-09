import { AutenticacionService } from './autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private isLogged: boolean = false;
  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }


  getUser() {
    this.autenticacionService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.getUser();
    if (this.isLogged == true) {
      console.log('user logged');
      return true;
    } else {
      console.log('NOT user logged');
      return false;
    }
  }
}
