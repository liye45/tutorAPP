import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import {YemianPage} from '../yemian/yemian'
import { HttpClient} from '@angular/common/http';
/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {
  searchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.searchPage=SearchPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
  }
  push(){
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
    console.log(name);
    this.navCtrl.push(YemianPage,name);
  }
}
