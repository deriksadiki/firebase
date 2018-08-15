import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {ShoppingItem} from '../../models/shopping';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  shoppingItem = {} as ShoppingItem;
key;
items: Observable<any[]>
itemsRef: AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.key = this.navParams.get('id');
    this.itemsRef = this.db.list('list');
    

  }

  ionViewDidLoad() {
  
  }

}
