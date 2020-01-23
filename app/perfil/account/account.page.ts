import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async showAlert(){
    const myAlert = await this.alertCtrl.create({
      header: 'Alterações salvas com Sucesso!',
      buttons: ['OK']
    });
    myAlert.present();
  }
  ngOnInit() {
  }

}
