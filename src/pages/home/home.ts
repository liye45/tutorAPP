import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnePage } from '../one/one';
import { TwoPage } from '../two/two';
import { ThreePage } from '../three/three';
import { SearchPage } from '../search/search';
declare var BMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  threePage;
  onePage;
  twoPage;
  searchPage;
  localCityName:string;
  
  constructor(public navCtrl: NavController) {
    this.onePage=OnePage;
    this.twoPage=TwoPage;
    this.threePage=ThreePage;
    this.searchPage=SearchPage;
  }
  push(){
    this.navCtrl.push(this.onePage);
  }
  pushTwo(){
    this.navCtrl.push(this.twoPage);
  }
  pushThree(){
    this.navCtrl.push(this.threePage);
  }
  pushSearch(){
    this.navCtrl.push(this.searchPage);
  }
  ionViewDidLoad()
  {
 var myCity = new BMap.LocalCity();
   myCity.get(function (result) {
   var cityName = result.name; 
   //使用localStoage存储cityName. 此处不可以使用this.localCityName = cityName; 因为这里的this 指向的是当前的类， 也就是 function(result)这个类
   localStorage.setItem('currentCity', cityName);
   return cityName;
  })
  setTimeout(() => {
   this.localCityName = localStorage.getItem('currentCity'); 
}, 500);
 }
  // var point = new BMap.Point(116.331398,39.897445);
	// map.centerAndZoom(point,12);

	// function myFun(result){
	// 	var cityName = result.name;
	// 	map.setCenter(cityName);
	// 	alert("当前定位城市:"+cityName);
	// }
	// var myCity = new BMap.LocalCity();
	// myCity.get(myFun);
}