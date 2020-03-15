import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {TieziPage} from '../tiezi/tiezi';
import {Tiezi1Page} from '../tiezi1/tiezi1'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [];
  isActive=0;
  isClick(i){
    this.isActive = i;
  }
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  gotiezi(){
    this.navCtrl.push(TieziPage);
  }
  gotiezi1(){
    this.navCtrl.push(Tiezi1Page);
  }
  shuzi1=622;
  shuzi2=622;
  shuzi3=622;
  shuzi4=622;
  zanshu=1002;
  shoushu=47;
   num1=0;
   num2=0;
   num3=0;
   num4=0;
  Zan1(){
    var xin1=document.getElementById("heart1");
    // var shuzi=Number(document.getElementById("shuzi1").innerHTML)+1;
    this.num1=this.num1+1;
    if(this.num1%2===1){
    xin1.style.color="red";
    this.shuzi1++;
    }
    else{
      xin1.style.color="black";
      this.shuzi1--;
    }
  }
  Zan2(){
    var xin2=document.getElementById("heart2");
    this.num2=this.num2+1;
    if(this.num2%2===1){
      this.shuzi2++;
    xin2.style.color="red";

  }
    else{
      xin2.style.color="black";
      this.shuzi2--;
    }
  }
  Zan3(){
    var xin3=document.getElementById("heart3");
    this.num3=this.num3+1;
    if(this.num3%2===1){
      this.shuzi3++;
    xin3.style.color="red";}
    else{
      this.shuzi3--;
      xin3.style.color="black";
    }
  }
  Zan4(){
    var xin4=document.getElementById("heart4");
    this.num4=this.num4+1;
    if(this.num4%2===1){
      this.shuzi4++;
    xin4.style.color="red";}
    else{
      this.shuzi4--;
      xin4.style.color="black";
    }
  }
  num5=0;
  num6=0;
  dianzan(){
    var xin=document.getElementById("xin");
    this.num5++;
    if(this.num5%2===1){
    xin.style.color="red";
    this.zanshu++;
  }else{
      xin.style.color="black"
      this.zanshu--;
    }
  }
  shoucang(){

    var xing=document.getElementById("xing");
    this.num6++;
    if(this.num6%2===1){
    xing.style.color="yellow"
  this.shoushu++}
    else{
      xing.style.color="black";
      this.shoushu--;
    }
  }
}
