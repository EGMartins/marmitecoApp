import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';

import { Marmiteco } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { StartPage } from '../pages/start/start';
import { MenuPage } from '../pages/menu/menu';


@NgModule({
  declarations: [
    Marmiteco,
    HomePage,
    DetailPage,
    MenuPage,
    StartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Marmiteco),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0ufkgGVGr0AUkiJA4Rt1-IaS3AydMzjg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Marmiteco,
    HomePage,
    DetailPage,
    MenuPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
