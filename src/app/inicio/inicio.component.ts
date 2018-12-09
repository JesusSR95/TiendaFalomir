import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 misproductos$:any;
  constructor(private ps:ProductosService, 
    private spinnerService: NgxSpinnerService) {
   }

  ngOnInit() {
    this.spinner();
    this.misproductos$=this.ps.getProductos();
  }
  spinner(): void{
    this.spinnerService.show();
    setTimeout(()=>{
      this.spinnerService.hide();
    }, 2000);
    }

}
