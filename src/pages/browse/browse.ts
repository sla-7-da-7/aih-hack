import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {

  products='PdsPage';
  boots = [
    {
    name:"Georgia Rose",
    price:"50",
    size:"37",
    colors:["black","yellow"],
    image:"boot1/1.jpg"
  },
  {
    name:"Bullboxer",
    price:"80",
    size:"40",
    colors:["black"],
    image:"boot2/1.jpg"
  },
  {
    name:"Chie Mihara",
    price:"100",
    size:"38",
    image:"boot3/2.jpg",
    colors:["yellow"]
  }
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

  goToBoots(){
    this.navCtrl.push(this.products,{
      products:this.boots
    });
  }

}
