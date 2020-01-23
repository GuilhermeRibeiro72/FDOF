import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.page.html',
  styleUrls: ['./rent.page.scss'],
})
export class RentPage {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  constructor(
    private alertCtrl: AlertController
  ) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
  async showAlert(){
    const myAlert = await this.alertCtrl.create({
      header: 'Pedido enviado com Sucesso!',
      buttons: ['OK']
    });
    myAlert.present();
  }
}

