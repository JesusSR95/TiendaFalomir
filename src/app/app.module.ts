import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { ProductosService } from './servicios/productos.service';
import { ProductosComponent } from './productos/productos/productos.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AutenticacionService } from './servicios/autenticacion.service';
import { GuardService } from './servicios/guard.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductoComponent } from './productos/producto/producto.component';




const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos/:id', component: ProductosComponent, canActivate: [GuardService] },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: ProductoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    ProductosComponent,
    RegistroComponent,
    InisesComponent,
    ProductoComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxSpinnerModule,
    HttpModule
  ],
  providers: [ProductosService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
