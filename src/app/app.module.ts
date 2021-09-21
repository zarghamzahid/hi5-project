import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { ListingMapComponent } from './listing/listing-map/listing-map.component';
import { ListingDetailComponent } from './listing/listing-detail/listing-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 95373f36cf286a1aa88a3fa38233db9e400f40e8

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
<<<<<<< HEAD
    LoginComponent,
    ListingMapComponent,
    ListingDetailComponent
=======
    AboutComponent
>>>>>>> 95373f36cf286a1aa88a3fa38233db9e400f40e8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    MatTabsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
