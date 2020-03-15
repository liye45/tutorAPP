import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import{AddPage} from '../pages/add/add';
/**
 * Generated class for the ExpandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expand',
  templateUrl: 'expand.html',
})
export class ExpandPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpandPage');
  }
  // goadd(){
  //   this.navCtrl.push(AddPage);
  // }

}

