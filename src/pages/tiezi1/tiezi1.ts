import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tiezi1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tiezi1',
  templateUrl: 'tiezi1.html',
})
export class Tiezi1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  setBackButtonText(){
    this.navCtrl.pop();
  }

}
