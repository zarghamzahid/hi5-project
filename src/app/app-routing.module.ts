import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingDetailComponent } from './listing/listing-detail/listing-detail.component';
import { ListingMapComponent } from './listing/listing-map/listing-map.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listing-map', component: ListingMapComponent},
  {path: 'listing-detail', component: ListingDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
