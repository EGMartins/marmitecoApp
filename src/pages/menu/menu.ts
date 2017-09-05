import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Business } from '../../models/business';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  myBusiness: Business[];
  weekDays: string[] = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  today;

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams, 
  						private loadingController: LoadingController,) {
  }

  ionViewDidLoad() {
  	const load = this.loadingController.create({
      content: "Localizando o cardápio..."
    })
    load.present();
    console.log('ionViewDidLoad MenuPage');
    this.myBusiness = this.navParams.data;
    this.today = this.weekDay();
    load.dismiss();
  }

  weekDay() {

  	var now = new Date();
  	var today = this.weekDays[ now.getDay() ];

  	console.log(today);
  	return today;
  }

}
