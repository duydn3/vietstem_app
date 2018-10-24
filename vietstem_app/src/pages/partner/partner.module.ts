import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { PartnerPage } from './partner';

@NgModule({
  declarations: [
    PartnerPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerPage),
  ],
})
export class PartnerPageModule {  
}
