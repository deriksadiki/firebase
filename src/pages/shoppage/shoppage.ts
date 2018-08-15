import { Component } from '@angular/core';
import {ShoppingItem} from '../../models/shopping'
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


/**
 * Generated class for the ShoppagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoppage',
  templateUrl: 'shoppage.html',
})
export class ShoppagePage {
  shoppingItem = {} as ShoppingItem;
  itemsRef: AngularFireList<any>;
  userList =  (this.navParams.get("userlist"));

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.itemsRef = db.list(this.userList + '/items');
  }

  addItems(shoppingItem : ShoppingItem){
    this.itemsRef.push({
      itemName:this.shoppingItem.itemName,
      itemNumber: this.shoppingItem.itemNumber
    })
    this.navCtrl.pop();
  }

}
