import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import{SigninPage} from '../signin/signin';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  headers=new HttpHeaders({
		'Content-Type': 'application/x-www-form-urlencoded'
	});
  itemsfood=Array();
  arrfood=["food_chuan","food_lu","food_su","food_yue"];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public alertCtrl: AlertController) {
    for(var i=0;i<this.arrfood.length;i++){
      this.http.get('http://192.168.94.144:8080/'+this.arrfood[i],{
        headers:new HttpHeaders({}),
        }).subscribe((data)=>{
          this.itemsfood.push(data);
        });
        console.log(this.itemsfood)
    }
    this.foodcomment={
      id:this.id,
      comment:this.content

    } 
  }
  name:any;
  password:string;
  myInput:string;
  objfood=[];
  output(){
    if(this.myInput){
      var reg =new RegExp(this.myInput,"g");
      for(var i=0;i<this.itemsfood.length;i++){
        for(var j=0;j<this.itemsfood[i].length;j++){
          if(reg.test(this.itemsfood[i][j].name)){
            this.objfood.push(this.itemsfood[i][j]);
            console.log("111");
          }
        }
      }
  
     }
  }

    getinformation(){
      this.objfood=[];
      console.log(this.objfood);
      console.log("222");
    }
    back(){
      this.navCtrl.pop();
    }  
    foodcomment;
  todos:'';
  todolist=[];
  id;
  content;
  add(e){
    var obj={    
      todos:this.todos,
    }
  if (e.keyCode==13) {
      this.todolist.push(obj);  
      this.todos=''; 
      this.foodcomment={
        id:this.id,
        content:this.content

      } 
      this.http.post('http://192.168.94.144:8080/'+'food_comment',this.foodcomment,{headers:this.headers}).subscribe((data) => {});
  }
  }
user={
    name:null,
    password:null
  }


  sub(){
    console.log("sub");
    this.user.name=this.name;
    this.user.password=this.password;
    this.http.post('http://192.168.94.144:8080/'+'users',this.user,{headers:this.headers}).subscribe((data)=>{
    this.navCtrl.push(SigninPage);
    });
  }
 del(){
  this.todolist.splice(0,this.todolist.length);
};

}
