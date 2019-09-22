import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  client = 'ClPage';
  constructor(public navCtrl: NavController) {

  }

  goTo(page){
    this.navCtrl.push(page);
  }

}
