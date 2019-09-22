import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"PdsPage"
})
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products
  productPage = 'ProductPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = this.navParams.get("products");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  openProduct(element){
    this.navCtrl.push(this.productPage,{
      product:element
    })
  }
}
