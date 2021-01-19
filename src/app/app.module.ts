import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';  //import baris ini
import { environment } from 'src/environments/environment'; //import baris ini
import { AngularFirestoreModule } from "@angular/fire/firestore";   //import baris ini

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),    //import baris ini
        AngularFirestoreModule  //import baris ini
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
