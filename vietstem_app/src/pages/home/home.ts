import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from './../course/course';
import { PartnerPage } from './../partner/partner';
import { LearningToolPage } from './../learning-tool/learning-tool';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectOptions;
  
  constructor(public navCtrl: NavController) {
    this.selectOptions = {
      cssClass: 'remove-ok remove-header'
    };
  }
  onNavigateToCourse(){
      this.navCtrl.push(CoursePage);
  }
  onNavigateToLearningTool(){
    this.navCtrl.push(LearningToolPage);    
  }
  onNavigateToPartner(){
    this.navCtrl.push(PartnerPage);
  }

}
