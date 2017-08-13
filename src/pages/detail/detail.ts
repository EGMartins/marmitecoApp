import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Business } from '../../models/business';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  business: Business[];
  menuPage = MenuPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.business = this.navParams.data;
  }

}
