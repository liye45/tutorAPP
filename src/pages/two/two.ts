import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import {SeasonPage} from '../season/season';
/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-two',
  templateUrl: 'two.html',
})
export class TwoPage {
  searchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchPage=SearchPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoPage');
  }
  pushTwo(){
    this.navCtrl.pop();
  }
  pushSearch(){
    this.navCtrl.push(this.searchPage);
  }
  close(){
    this.navCtrl.pop();
  }
  go(e){
    var name=e.target.innerText;
    this.navCtrl.push(SeasonPage,name);
  }

}
