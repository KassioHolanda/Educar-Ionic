import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAppPage } from './login-app';

@NgModule({
  declarations: [
    LoginAppPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAppPage),
  ],
})
export class LoginAppPageModule {}
