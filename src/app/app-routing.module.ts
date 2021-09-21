import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ListingDetailComponent } from './listing/listing-detail/listing-detail.component';
import { ListingMapComponent } from './listing/listing-map/listing-map.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listing-map', component: ListingMapComponent},
  {path: 'listing-detail', component: ListingDetailComponent},
=======
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent}
>>>>>>> 95373f36cf286a1aa88a3fa38233db9e400f40e8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
