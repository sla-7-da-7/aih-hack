import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'ClPage'
})
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {
  page1='BrowsePage';
  page2 = 'SearchPage';
  page3 = 'UserPage';
  page4='TestPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }

}
