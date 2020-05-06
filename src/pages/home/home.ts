import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ShowWhen, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { ViewChild } from '@angular/core';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Slides } from 'ionic-angular';
import { MainPage } from '../main/main';
import { AdMobFree, AdMobFreeInterstitial, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public result:string;
  run_btn='RUN';
  RunBtnClicked:boolean=false;
  Heading_id:any;
  data:any;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,private admobPro:AdMobPro,private platform:Platform,private admobFree: AdMobFree,private alertCtrl: AlertController,public LoadingCtr:LoadingController, public http:Http,public navParm:NavParams) {

  //  this.showInterstitialAd();
    let Loading=this.LoadingCtr.create({
      content:"Please Wait..."
    });
    Loading.present();
    this.Heading_id=navParm.get('id');
    console.log(this.Heading_id);
    let url = "http://www.incrts.tk/Learn_Java/getInformation_ionic.php";
   
    let PostData=new FormData();
    PostData.append('id',this.Heading_id);
    this.data=this.http.post(url,PostData).subscribe((data)=>{
      this.result=data.json();
      console.log(this.result);  
       Loading.dismiss();
            },(error)=>
    {

    });

    platform.ready().then(() => {
      // var admobid = {
         
      //     interstitial: 'ca-app-pub-8702213124475925/2865845459'
      // };
  
  
      // this.admobPro.prepareInterstitial({
      //     adId: admobid.interstitial,
      //     isTesting: false,
      //     autoShow: true
      // })
  });
    // this.http.get(url).subscribe((data)=>
    // {
       
    //     this.result=data.json();
    //   console.log(this.result);  
       
    //         },(error)=>
    // {

    // })
  }

  public onRunBtnClicked()
  {
    this.RunBtnClicked=!this.RunBtnClicked;
    this.run_btn="Continue";
    if(this.RunBtnClicked==false)
    {
      if(this.run_btn=='Continue')
      {
        this.showAleratBox();
      }
        this.slides.slideNext();
        this.run_btn="RUN";
        
    }
   
   
  }

  slideChanged() {
    this.RunBtnClicked=false;
    this.run_btn="RUN";
    
  }


  showAleratBox()
  {
    if(this.slides.isEnd())
   {
    let alert = this.alertCtrl.create({
      title: 'congratulations!! You Completed this Topic',
      message: 'Do you want to go to next Topic?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
          
     if(this.platform.is('cordova'))
     {

           
   const FullAdConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    
    id:'ca-app-pub-1177154920708804/5170369112',
    isTesting: false,
    autoShow: true
   };
   this.admobFree.interstitial.config(FullAdConfig);
   
   this.admobFree.interstitial.prepare()
     .then(() => {
       // banner Ad is ready
       // if we set autoShow to false, then we will need to call the show method here
       this.admobFree.interstitial.show();
       console.log("Display")
     })
     .catch(e => console.log(e));
     console.log("NoDisplay");
    }
    this.navCtrl.push(MainPage);
          }
        }
      ]
    });
    alert.present();
   }

  }

  // async showInterstitialAd() {
  //   try {
  //     const interstitialConfig: AdMobFreeInterstitialConfig = {
  //       id: 'ca-app-pub-8702213124475925/2865845459',
  //       isTesting: false,
  //       autoShow: true
  //     }

  //     this.admobFree.interstitial.config(interstitialConfig);

  //     const result = await this.admobFree.interstitial.prepare();
  //    // console.log(result);
  //     this.admobFree.interstitial.show();
  //   }
  //   catch (e) {
  //     console.error(e)
  //     // let alert = this.alertCtrl.create({
  //     //   title: e,
  //     //   subTitle: e,
  //     //   buttons: ['Dismiss']
  //     // });
  //     // alert.present();
  //   }
  // }

  // presentAlert() {
   
  // }
}

