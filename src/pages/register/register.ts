import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user'
import {userDetails} from '../../models/userDetails'
import {AngularFireAuth} from 'angularfire2/auth';
import {  HomePage} from '../home/home'
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

user = {} as User;
userdetails = {} as userDetails;
itemsRef: AngularFireList<any>;
list;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticate: AngularFireAuth, private db: AngularFireDatabase) {
  }

  register(){
    try{
      const results = this.authenticate.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      this.authenticate.authState.subscribe(data =>{
       // this.db.list('profiles/' + data.email).push(this.userdetails)
      this.list = 'profiles/' + data.uid;
       this.itemsRef = this.db.list(this.list);
       this.itemsRef.push(this.userdetails);
       this.navCtrl.push(HomePage, {userlist:this.list} );
      });
      
    }
    catch(e){
        alert(e);
    }
  }
}
