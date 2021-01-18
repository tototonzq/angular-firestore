import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-firestore';
    myData: any[] = [];
    nama;
    stok;
    harga;

    constructor( private firestore: AngularFirestore ){
        this.tampilData();
    }

    tampilData() {
        this.firestore.collection("barang")
        .get()
        .subscribe((ss) => {
            ss.docs.forEach((doc) => {
                this.myData.push(doc.data());
            });
            console.log(this.myData)
        });
    }

    async simpan() {
        let data = {
            namaBarang: this.nama,
            stokBarang: this.stok,
            hargaBarang: this.harga
        }
        this.firestore.collection('barang')
        .add(data)
        .then(res => {
            console.log(res);
            this.tampilData();
        })
        .catch(e => {
            console.log(e);
        })
    }
}
