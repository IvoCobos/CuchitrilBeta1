import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { CuchitrilComponent } from './cuchitril/cuchitril.component';
import { VideosComponent } from './videos/videos.component';

import { GaleriaComponent } from './galeria/galeria.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDbService } from './services/data-db.service';


import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ReservaComponent } from './reserva/reserva.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
  { path:'', redirectTo: '/inicio', pathMatch: 'full'},
  { path:'inicio', component: InicioComponent},
  { path:'cuchitril', component: CuchitrilComponent},
  { path:'videos', component: VideosComponent},
  { path:'galeria', component: GaleriaComponent},
  { path:'reserva', component: ReservaComponent},
  

]
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    CuchitrilComponent,
    VideosComponent,
    GaleriaComponent,
    ReservaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
