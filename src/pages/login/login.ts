import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Toast } from 'ionic-angular';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { MainPage } from '../main/main';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:any={};
  userdata:any;
  data:any;
  result:any;
  constructor(public navCtrl: NavController,private app:App,public storage:Storage, public navParams: NavParams,public fb:Facebook,public http:Http) { 
    storage.get('login').then((val) => {
      console.log('Your age is', val);
      if(val==1)
      {
        //this.navCtrl.push(MainPage);
        this.app.getRootNav().setRoot(MainPage);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fbLogin()
  {
    //this.navCtrl.push(MainPage);
    this.fb.login(['public_profile', 'email'])
  .then((res: FacebookLoginResponse) => {
    if(res.status==='connected')
    {
      this.user.image='https://graph.facebook.com/'+res.authResponse.userID+'/picture?type=square';
      this.getData(res.authResponse.accessToken);
     // alert("Login"+res.authResponse.accessToken);
    }
    else{
      alert("Login Failed");
    }
    console.log('Logged into Facebook!', res)
  })
  .catch(e => console.log('Error logging into Facebook', e));

  }

  getData(accessToken:string)
  {

    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userdata = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}

        this.storage.set('login', 1);
        this.postDataIs(profile.first_name,profile.email);
        
      });
    });
  
  
  }


  postDataIs(FirstName:any,Email:any)
  {
    let url="http://www.incrts.tk/Learn_Java/UserLogin.php";
    let PostUserData=new FormData();
    this.navCtrl.push(MainPage,{
      username:FirstName,
      email:Email
    });
   
  }
}
