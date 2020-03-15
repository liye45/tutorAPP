import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
/**
 * Generated class for the SeasonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-season',
  templateUrl: 'season.html',
})
export class SeasonPage {
  content;
 winter;
  citys=Array();
  items;
  name;
  navpic1;
  navpic2;
  navpic3; 
  navpic4;
  pic1;
  pic2;
  pic3;
  pic4;
  pic5;
  pic6;
  content1;
  content2;
  content3;
  content4;
  spot1;
  spot2;
  spot3;
  spot4;
  spot5;
  spot6;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public alertCtrl: AlertController) {
    this.http.get('http://192.168.94.144:8080/'+'winter',{
      headers:new HttpHeaders({})
    }).subscribe((data)=>{
      this.winter=data;
      for(var i=0;i<this.winter.length;i++){
      if(this.winter[i].name==navParams.data){
        this.items=this.winter[i];
      }
    }
    console.log(this.items);
    // //步骤名、步骤图片、步骤内容分成数组
        this.name =this.items.name;
        this.navpic1=this.items.navpic1;
        this.navpic2=this.items.navpic2;
        this.navpic3=this.items.navpic3;
        this.navpic4=this.items.navpic4;
        this.pic1=this.items.pic1;
        this.pic2=this.items.pic2;
        this.pic3=this.items.pic3;
        this.pic4=this.items.pic4;
        this.pic5=this.items.pic5;
        this.pic6=this.items.pic6;
        this.content1=this.items.content1;
        this.content2=this.items.content2;
        this.content3=this.items.content3;
        this.content4=this.items.content4;
        this.spot1=this.items.spot1;
        this.spot2=this.items.spot2;
        this.spot3=this.items.spot3;
        this.spot4=this.items.spot4;
        this.spot5=this.items.spot5;
        this.spot6=this.items.spot6;
  })
}

close(){
  this.navCtrl.pop();
}
}
