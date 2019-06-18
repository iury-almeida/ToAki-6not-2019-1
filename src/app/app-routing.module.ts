import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { EventosComponent } from './eventos/eventos.component';
import { OficinaComponent } from './oficina/oficina.component';
import { GeoLocComponent } from './geoloc/geoloc.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'oficina/:codigo', component: OficinaComponent },
  { path: 'geoloc', component: GeoLocComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
