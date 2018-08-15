import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user'
import {AngularFireAuth} from 'angularfire2/auth';
import { RegisterPage} from '../register/register'
import {  HomePage} from '../home/home'
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
  user = {} as User;
  results :any 
  arr = [];
  list;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticate: AngularFireAuth) {
  }

    register(){
      this.navCtrl.push( RegisterPage);
    }
    signIn(){
      try{
     this.results = this.authenticate.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
     this.authenticate.authState.subscribe(data =>{
      // this.db.list('profiles/' + data.email).push(this.userdetails)
     this.list = 'profiles/' + data.uid;
      this.navCtrl.push(HomePage, {userlist:this.list} );
     });
     
        this.navCtrl.push(  HomePage );
      }
      catch(e){
          alert(e);
      }
    }
}
