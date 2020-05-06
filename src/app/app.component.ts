import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TopicsPage } from '../pages/topics/topics';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MainPage;

  pages: Array<{title: string, component: any}>;
  

  // public username:any;
  // email:any;
  // profile_img:any;
  constructor(public platform: Platform,private iab: InAppBrowser, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    
    //this.username="Rahul";
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
   


    // storage.get('username').then((val) => {
    //   this.username=val;
    // });
    // storage.get('email').then((val) => {
    //   this.email=val;
    // });
    // storage.get('username').then((val) => {
    //   this.profile_img=val;
    // });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  ContactUs()
  {
    const browser = this.iab.create('https://goo.gl/forms/FTOxf3OJ618IOdZ32');
// browser.on('loadstop').subscribe(event => {
//    browser.insertCSS({ code: "body{color: red;" });
// });
  }
  FeedBack()
  {
    const browser = this.iab.create('https://goo.gl/forms/FTOxf3OJ618IOdZ32');
// browser.on('loadstop').subscribe(event => {
//    browser.insertCSS({ code: "body{color: red;" });
// });
  }
  More_App()
  {
    const browser = this.iab.create('http://innocruts.com/mycodebox/more_app');
// browser.on('loadstop').subscribe(event => {
//    browser.insertCSS({ code: "body{color: red;" });
// });
  }
  Request_Course_Topic()
  {
    const browser = this.iab.create('http://innocruts.com/mycodebox/request_course_topic.php');
// browser.on('loadstop').subscribe(event => {
//    browser.insertCSS({ code: "body{color: red;" });
// });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
