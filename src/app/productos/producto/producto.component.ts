import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  id: any;
  private sub: any;
  cargado: boolean = false;
  producto:any;


  constructor(private route: ActivatedRoute,
    private ps: ProductosService) { }


  ngOnInit() {
    //loading...
   this.producto=null;
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.ps.getProducto2(this.id).subscribe((querySnapshot) => {

        this.producto=querySnapshot.data();
        this.producto.id=querySnapshot.id;
        console.log(this.producto);
        //quitar loading

      })


      //Aqui peticiónn por servicio a angular para que te devuelva los datos del producto identificado this.id
      /* Tu servicio devolvera una promise o observable. TU aquí controlas cuando llega.
       y cuando llegue (es decir, then o subscribe) actualizar los datos para renderizar
       y pondras cargado a true para qeu se muestre
       url1=lo que te diga la nase de datos
       url2.....
 
       al final cargado=true
            */
    });
  }



}
