import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }
  goBack() {
    this.navCtrl.pop();
  }
  activeCourse() {
    let prompt = this.alertCtrl.create({
      title: 'Kích hoạt khóa học',
      message: "Để kích hoạt khóa học, vui lòng nhập mã kích hoạt",
      cssClass: 'alertCss',
      inputs: [
        {
          name: 'activecode',
          placeholder: 'Nhập mã kích hoạt'
        },
      ],
      buttons: [
        {
          text: 'Gửi',
          cssClass: 'sent-css',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Quên mã kích hoạt',
          handler: () => {            
            let promptForgot = this.alertCtrl.create({
              title: 'Quên mã kích hoạt',
              message: "Vui lòng nhập số điện thoại hoặc email bạn đã đăng ký khóa học",
              cssClass: 'alertCss',
              inputs: [
                {
                  name: 'activecode',
                  placeholder: 'Nhập số điện thoại hoặc email'
                },
              ],
              buttons: [
                {
                  text: 'Gửi',
                  cssClass: 'sent-css',
                  handler: data => {
                    console.log('Cancel clicked');
                  }
                }
              ],
            });
            promptForgot.present();
          }
        },
        {
          text: 'Đăng ký mua',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    prompt.present();
  }
}
