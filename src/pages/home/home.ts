import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController } from 'ionic-angular';


import { Location } from '../../models/location';
import { Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Business } from '../../models/business';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };

  locationIsSet = false;
  iconUrl = 'assets/icon/food_ico.png'
  myIconUrl = 'assets/icon/male.svg'

  businesses: Business[];
  detailPage = DetailPage;

  constructor(public modalCtrl: ModalController,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private toastController: ToastController,
              public http: Http) {
              this.onGetLocation();
  }

  goToDetail() {
    this.navCtrl.push(DetailPage);
  }

  onGetLocation() {
    const url = 'http://marmiteco.com/json-map?&search=';
    const load = this.loadingController.create({
      content: "Analisando sua localização..."
    })
    load.present();
    Geolocation.getCurrentPosition()
      .then(
        location => {
          this.http.get(url+location.coords.latitude+','+location.coords.longitude).map(res => res.json()).subscribe(data =>
            { this.businesses = data });

          load.dismiss();
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
          this.locationIsSet = true;
        }

      )
      .catch(
        error => {
          load.dismiss();
          const errorToast = this.toastController.create({
            message: "Não foi possível encontrar sua localização...",
            duration: 2500
          });
          errorToast.present();
          console.log(error);
        }
      )
  }

}
