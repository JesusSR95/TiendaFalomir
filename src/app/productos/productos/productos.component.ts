import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { ProductoComponent } from '../producto/producto.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  id: any;
  producto: any;
  private sub: any;
  constructor(  private route: ActivatedRoute,
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

      });
    }
  
}
