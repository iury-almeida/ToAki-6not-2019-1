import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { GeoLocComponent } from './geoloc/geoloc.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'geoloc', component: GeoLocComponent },
  { path: 'qrcode', component: QrcodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
