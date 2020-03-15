import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
/**
 * Generated class for the MatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mate',
  templateUrl: 'mate.html',
})
export class MatePage {
  headers=new HttpHeaders({
		'Content-Type': 'application/x-www-form-urlencoded'
	});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  place;
  time;
  num;
  obj=[];
  together={
    place:null,
    time:null,
    num:null
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MatePage');
  }
  returnn(){
    this.navCtrl.pop();
  }
  fabu(){
      console.log("sub");
      this.together.place=this.place;
      this.obj.push(this.place)
      this.together.time=this.time;
      this.obj.push(this.time)
      this.together.num=this.num;
      this.obj.push(this.num);
      console.log(this.obj);
      var play=document.getElementById("play");
      play.style.display="block";
      this.http.post('http://192.168.94.144:8080/'+'mate',this.together,{headers:this.headers}).subscribe((data)=>{
      });
      
  }
}
