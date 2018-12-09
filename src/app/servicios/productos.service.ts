import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  producto: any = [{}]

  constructor( public db: AngularFirestore,
    private firestore: AngularFirestore) {
  }
  
  getProducto(id) {
    //devuelvo un observable de angular list (que es un select) pero solo par aun campo croncreto id=x
    return this.db.collection("moviles")
    .snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data();
        //Get document id
        const id = a.payload.doc.id;
        return { id, ...data }
      }
        )
    }));
   // return this.producto;
  }   

  getProductos() {
    //devuelvo un observable de angular list (que es un select) pero solo par aun campo croncreto id=x
    
    return this.db.collection("moviles").snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data();
        //Get document id
        const id = a.payload.doc.id;
        return { id, ...data }
      }
        )
    }));
   // return this.producto;
  }
  public getProducto2(id: string) {
    console.log(id);
    return this.firestore.collection('moviles').doc(id).get();
  }

  public getProductos2(id: string) {
    console.log(id);
    return this.firestore.collection('moviles').doc(id).get();
  }


}

