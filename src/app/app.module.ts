import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';
import { TopicsPage } from '../pages/topics/topics';

import {OneSignal} from '@ionic-native/onesignal';
import { MainPage } from '../pages/main/main';
import {LoginPage} from '../pages/login/login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Admob } from '@ionic-native/admob';

@NgModule({
  declarations: [
    MyApp,
    TopicsPage,
    HomePage,
    ListPage,
    MainPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TopicsPage,
    HomePage,
    ListPage,
    MainPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneSignal,
    AdMobFree, 
    AdMobPro,
    Admob
    
    
    
  ]
})
export class AppModule {}
