import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { EventosComponent } from './eventos/eventos.component';
import { OficinaComponent } from './oficina/oficina.component';
import { GeoLocComponent } from './geoloc/geoloc.component';
// import { EventoService } from './services/evento.service'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    QrCodeComponent,
    EventosComponent,
    OficinaComponent,
    GeoLocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
