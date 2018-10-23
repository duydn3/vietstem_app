import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningToolPage } from './learning-tool';

@NgModule({
  declarations: [
    LearningToolPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningToolPage),
  ],
})
export class LearningToolPageModule {}
