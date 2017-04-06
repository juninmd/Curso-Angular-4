import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
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
