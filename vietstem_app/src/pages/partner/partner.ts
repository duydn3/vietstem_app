import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartnerSuccessPage } from './../partner-success/partner-success';

/**
 * Generated class for the PartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partner',
  templateUrl: 'partner.html',
})
export class PartnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onNavigateToPartnerSuccess(){
      this.navCtrl.push(PartnerSuccessPage);
  }

  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnerPage');
  }

}
