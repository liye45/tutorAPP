import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  n=0;
  constructor(public navCtrl: NavController) {}
  
 

  zan(){
    var zan=document.getElementById("ion1");
    this.n++;
    if(this.n%2===1){
      zan.style.color="red";
    }else{
      zan.style.color="black";
    }
  }
 
}
