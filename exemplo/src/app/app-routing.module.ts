import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NovahomeComponent } from './pages/novahome/novahome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'novahome', component: NovahomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
