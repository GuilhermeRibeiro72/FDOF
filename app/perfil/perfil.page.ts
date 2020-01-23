import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  async logout(){
    await this.presentLoading();
    try {
      this.authService.logout();
    } finally {
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor, Aguarde...' });
    return this.loading.present();
  }
}
