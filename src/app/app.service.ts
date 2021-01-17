import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor( private firestore: AngularFirestore ) { }

    tambahBarang(data) {
        return new Promise<any>((resolve, reject) =>{
            this.firestore
                .collection("barang")
                .add(data)
                .then(res => {}, err => reject(err));
        });
    }
}
