import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';

import{HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenst/home/home.component';
import { SearchComponent } from './componenst/search/search.component';
import { ArtistaComponent } from './componenst/artista/artista.component';
import { NavbarComponent } from './componenst/shared/navbar/navbar.component';

//Rutas
import{ROUTES} from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './componenst/tarjetas/tarjetas.component';
import { LoadingComponent } from './componenst/shared/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
