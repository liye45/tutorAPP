import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import {YemianPage} from '../yemian/yemian';
/**
 * Generated class for the ThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-three',
  templateUrl: 'three.html',
})
export class ThreePage {
  searchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchPage=SearchPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThreePage');
  }
  pushSearch(){
    this.navCtrl.push(this.searchPage);
  }
  go(e){
    // console.log(e.target.innerText);
    var city=e.target.innerText;
    var name=city.replace("--","");
    console.log(name);
    this.navCtrl.push(YemianPage,name);
  }
  goto(e){
   var name=e.target.innerText;
   console.log(name);
   this.navCtrl.push(YemianPage,name);
  }
  close(){
    this.navCtrl.pop();
  }
}
