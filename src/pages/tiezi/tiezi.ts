import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TieziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tiezi',
  templateUrl: 'tiezi.html',
})
export class TieziPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setBackButtonText(){
    this.navCtrl.pop();
  }

}
