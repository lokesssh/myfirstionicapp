import { Component } from '@angular/core';
import {FirstpagePage} from "../firstpage/firstpage";
import {NavController} from "ionic-angular";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
firstpage=FirstpagePage;
  constructor(public navCtrl: NavController,public datafetch:DatafetchProvider) {
  this.getdata()
  }
  goto()
  {


    this.navCtrl.push(FirstpagePage,{"name":"lokesh"});
  }
  getdata(){
    this.datafetch.load().then((data)=>{
      //this.student=data;
      console.log(data)
      }
    );
  }
}
