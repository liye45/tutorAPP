import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HomePage} from '../home/home'
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  users;
  user;
  name:'';
  password:'';
  username=[];
  userpassword=[];
  code;
  correct;
  key;
  man;
  zhanghu=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.http.get('http://192.168.94.144:8080/'+'users',{
      headers:new HttpHeaders({
      }),
    }).subscribe((data) => { 
      this.users = data;
      console.log(this.users);
      for(var i = 0;i<this.users.length;i++){
        this.username[i] = data[i].name;
        this.userpassword[i] = data[i].password;
      }
       console.log(this.username,this.userpassword);
    });}
    tishi:string;
  myy(){
    for(var i in this.username){
      if(this.username[i] == this.name){
        this.code = this.userpassword[i];
        
      }
    }
    if(this.password == this.code && this.code){
      
      this.navCtrl.push(HomePage, this.user);
      this.key = localStorage.setItem('key','ok');
      this.man = localStorage.setItem('man',this.man);
    }else{
      this.tishi="用户名或密码错误";
      console.log("error");
    }
  }
}
  
