import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController } from 'ionic-angular';


import { Location } from '../../models/location';
import { Geolocation } from 'ionic-native';
import { MapPage } from '../map/map';


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

  constructor(public modalCtrl: ModalController,
              private loadingController: LoadingController,
              private toastController: ToastController) {

  }

  onOpenMap() {
    const modal = this.modalCtrl.create(MapPage, {location: this.location});
    modal.present();
  }

  onGetLocation() {
    const load = this.loadingController.create({
      content: "Analisando sua localização..."
    })
    load.present();
    Geolocation.getCurrentPosition()
      .then(
        location => {
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
