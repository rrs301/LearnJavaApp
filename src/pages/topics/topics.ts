import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';
/**
 * Generated class for the TopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {

  data:any;
  Level:any;
  public result:string;
  constructor(public navCtrl: NavController,public loadingCtr:LoadingController, public navParams: NavParams,public http:Http,public oneSignal:OneSignal) {
   
    // this.storage.get('email').then((val) => {
    //   console.log('Your name is', val);
    //   alert(val);
    // })
   
    let Loading=this.loadingCtr.create({
      content:'Please Wait...'
    });
    Loading.present();

    this.initOneSignal();

    this.Level=navParams.get('Level');
    let url="http://www.innocruts.com/Learn_Java/getTopicName_Ionic.php";
    let PostData=new FormData();
    PostData.append('level',this.Level);
    this.data=this.http.post(url,PostData).subscribe((data)=>{
      this.result=data.json();
      console.log(this.result);  
       Loading.dismiss();
            },(error)=>
    {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
  }

  OnClickInfoPage(id:any)
  {
   
    this.navCtrl.push(HomePage,{
      id:id
    });
  }

  initOneSignal()
  {
    this.oneSignal.startInit("e8f7f87c-49ea-4918-9508-49af661a3961","pythonapp-1545099676014");
    // this.oneSignal.inFocusDisplaying
    // (this.oneSignal.OSInFocusDisplayOption.Notification);

    // this.oneSignal.handleNotificationReceived().subscribe(()=>{
    //   console.log("Notification Recived");
    // })
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

// this.oneSignal.handleNotificationReceived().subscribe(() => {
//  // do something when notification is received
// });

// this.oneSignal.handleNotificationOpened().subscribe(() => {
//   // do something when a notification is opened
// });

this.oneSignal.endInit();

    this.oneSignal.endInit();
  }
}
