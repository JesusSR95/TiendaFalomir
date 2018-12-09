import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLogged: boolean=false;


  constructor(
    private autenticacionService: AutenticacionService,
    private afAuth: AngularFireAuth) { }


  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
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

  onLogout(){
    this.afAuth.auth.signOut();
  }
}
