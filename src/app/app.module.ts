import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './pages/menu/menu.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { PostComponent } from './components/post/post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FiltroPipe } from './pipes/filtro.pipe';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { environment } from '../environments/environment';

const env = environment;

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    MenuComponent,
    GaleriaComponent,
    PostComponent,
    BlogComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
