import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { Location } from '../../models/location';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getLocation();
  }

  getLocation() {
    Geolocation.getCurrentPosition()
      .then(
        location => {
          console.log(location.coords.latitude);
          console.log(location.coords.latitude);
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      )
  }

}
