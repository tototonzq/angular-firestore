import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-firestore';
    myData: any[] = [];
    id;
    nama;
    stok;
    harga;

    isEdit;
    
    constructor( private firestore: AngularFirestore ){
        this.tampilData();
    }

    tampilData() {
        let data = this.firestore.collection('barang');
        let dataTerbaru = data.valueChanges({ idField: 'id' });
        dataTerbaru.subscribe(ss => this.myData = ss);
        this.isEdit = false
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
            this.reset();
        })
        .catch(e => {
            console.log(e);
        })
    }

    getEdit(arr) {
        this.isEdit = true;
        this.id = arr.id;
        this.nama = arr.namaBarang;
        this.stok = arr.stokBarang;
        this.harga = arr.hargaBarang;
    }

    edit() {
        let data = {
            namaBarang: this.nama,
            stokBarang: this.stok,
            hargaBarang: this.harga
        }
        this.firestore.collection('barang').doc(this.id).update(data);
        this.tampilData();
        this.reset();
    }

    delete(arr) {
        this.firestore.collection('barang').doc(arr.id).delete();
    }

    reset() {
        this.isEdit = false;
        this.nama = "";
        this.stok = "";
        this.harga = "";
    }
}
