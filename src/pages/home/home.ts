import { Component } from '@angular/core';
import { NavController,  ActionSheetController, Nav , NavParams} from 'ionic-angular';
import {ShoppagePage} from '../shoppage/shoppage'
import {ShoppingItem} from '../../models/shopping'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {EditPage} from '../edit/edit';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>
  itemsRef: AngularFireList<any>;
  userProfile: any;
  userList =  (this.navParams.get("userlist"));

  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private ac: ActionSheetController, public navParams: NavParams) {
    this.itemsRef = this.db.list(this.userList + '/items');
    console.log(this.userList)
    this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
  }

  add = function (){
    this.navCtrl.push(ShoppagePage, {userlist:this.userList });
  }

  

  selectItem = function (shoppingItem : ShoppingItem, key){
    const actionSheet = this.ac.create({
      title: shoppingItem.itemName,
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.itemsRef.remove(key);
          }
        },{
          text: 'update',
          handler: () => {
        this.navCtrl.push(EditPage, {id:key})
            
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
