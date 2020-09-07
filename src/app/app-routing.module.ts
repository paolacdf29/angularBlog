import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'post', component: PostComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
