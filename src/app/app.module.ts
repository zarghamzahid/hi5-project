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
<<<<<<< HEAD
>>>>>>> 95373f36cf286a1aa88a3fa38233db9e400f40e8
=======
import { ContactComponent } from './contact/contact.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
>>>>>>> eb675fcbb7a9363912ceaba80f1bff91a4ab3230

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    LoginComponent,
    ListingMapComponent,
    ListingDetailComponent
=======
    AboutComponent
>>>>>>> 95373f36cf286a1aa88a3fa38233db9e400f40e8
=======
    AboutComponent,
    ContactComponent
>>>>>>> eb675fcbb7a9363912ceaba80f1bff91a4ab3230
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
<<<<<<< HEAD
    RouterModule,
    MatTabsModule,
    NoopAnimationsModule,
=======
    HttpClientModule
>>>>>>> eb675fcbb7a9363912ceaba80f1bff91a4ab3230
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
