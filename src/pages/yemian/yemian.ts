import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
/**
 * Generated class for the YemianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yemian',
  templateUrl: 'yemian.html',
})
export class YemianPage {
  content;
  hotcity;
  citys=Array();
  items;
  name;
  navpic1;
  spot;
  pic2;
  pic3;
  pic4;
  pic5;
  pic6;
  pic7;
  picspot2;
  picspot3;
  picspot4;
  picspot5;
  picspot6;
  picspot7;
  tiyanimg2;
  tiyanimg3;
  tiyanimg4;
  tiyanimg5;
  tiyanimg6;
  tiyanimg7;
  tiyanimg1;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public alertCtrl: AlertController) {
    this.http.get('http://192.168.94.144:8080/'+'hotcity',{
      headers:new HttpHeaders({})
    }).subscribe((data)=>{
      this.hotcity=data;
      for(var i=0;i<this.hotcity.length;i++){
      if(this.hotcity[i].city==navParams.data){
        this.items=this.hotcity[i];
      }
    }
    console.log(this.items);
    // //步骤名、步骤图片、步骤内容分成数组
        this.name =this.items.city;
        this.navpic1=this.items.navpic1;
        this.pic2=this.items.pic2;
        this.pic3=this.items.pic3;
        this.pic4=this.items.pic4;
        this.pic5=this.items.pic5;
        this.pic6=this.items.pic6;
        this.pic7=this.items.pic7;
        this.picspot2=this.items.picspot2;
        this.picspot3=this.items.picspot3;
        this.picspot4=this.items.picspot4;
        this.picspot5=this.items.picspot5;
        this.picspot6=this.items.picspot6;
        this.picspot7=this.items.picspot7;
        this. tiyanimg2=this.items.tiyanimg2;
        this. tiyanimg3=this.items.tiyanimg3;
        this. tiyanimg4=this.items.tiyanimg4;
        this. tiyanimg5=this.items.tiyanimg5;
        this. tiyanimg6=this.items.tiyanimg6;
        this. tiyanimg1=this.items.tiyanimg1;
    });
     
   
 }
  close(){
    this.navCtrl.pop();
  }
  
 
}
