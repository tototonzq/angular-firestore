import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-firestore';

    constructor( private firestore: AngularFirestore ){}

    async simpan() {
        let data = {
            namaBarang: "Pepsodent 15mg",
            stokBarang: 500,
            hargaBarang: 2500
        }
        this.firestore.collection('barang')
        .add(data)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    }
}
