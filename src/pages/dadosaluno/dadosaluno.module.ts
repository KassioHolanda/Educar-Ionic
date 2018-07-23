import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosalunoPage } from './dadosaluno';

@NgModule({
  declarations: [
    DadosalunoPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosalunoPage),
  ],
})
export class DadosalunoPageModule {}
