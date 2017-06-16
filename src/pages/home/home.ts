import { Component } from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AccountPage} from "../account/account";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  addcomment:string;
  student_name:string;
  student_year:string;
  student_batch:string;
  comment:any=["ab","cd","de"];
  students:any=[{"name":"ab","batch":"2014","year":"second"},{"name":"cd","batch":"2013","year":"third"},
    {"name":"erf","batch":"2012","year":"fourth"}];
  constructor(public navCtrl: NavController,public alertctrl:AlertController) {

  }
onclick(){
    if(this.username=="lokesh" && this.password=="12345") {
      this.navCtrl.push(LoginPage,{"username":"lokesh"});
    }
    else{
      alert();
    }
}
cc(){
  this.navCtrl.setRoot(AccountPage);
}
addcomments(){
  this.comment.push(this.addcomment);
  this.addcomment="";
}
deleteitem(i){
  this.comment.splice(i,1);
}
aastudent(){
  this.students.push({"name":this.student_name,"batch":this.student_batch,"year":this.student_year});
  this.student_name="";
  this.student_batch="";
  this.student_year="";
}
delete(i){
  this.students.pop();
}

}

