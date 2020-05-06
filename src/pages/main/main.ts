import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TopicsPage } from '../topics/topics';
import { Http } from '@angular/http';
import { Admob, AdmobOptions } from '@ionic-native/admob';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {

  username:any;
  email:any;
  constructor(public navCtrl: NavController, private admob: Admob,public navParams: NavParams,public http:Http,private alertCtrl: AlertController) {
    this.username=navParams.get('username');
    this.email=navParams.get('email');

    
    
    // let alert = this.alertCtrl.create({
    //   title: this.username,
    //   subTitle: this.email,
    //   buttons: ['Dismiss']
    // });
    // alert.present();
    // this.storage.set('username', this.username);
    // this.storage.set('email',this.email);
    let url="http://www.incrts.tk/Learn_Java/UserLogin.php";
    let PostUserData=new FormData();
    
    PostUserData.append('Username',this.username);
    PostUserData.append('Email', this.email);
   this.http.post(url,PostUserData).subscribe((data)=>{ 
     // alert("In Post");
     
            },(error)=>
    {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  OnClickToGoTopicPage(Level:any)
  {
    this.ShowAdmobAds();
    this.navCtrl.push(TopicsPage,{
      Level:Level
    });
  }


  ShowAdmobAds()
  {
    this.admob.requestInterstitialAd()
  .then(() => console.log('Interstitial ad loaded'))
  .catch(err => console.error('Error loading interstitial ad:', err));


  // Show an interstitial ad (requestInterstitialAd must be called before)
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    this.admob.showInterstitialAd()
      .then(() => console.log('Interstitial ad shown'))
      .catch(err => console.error('Error showing interstitial ad:', err));
  }
});
  }


}
