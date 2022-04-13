import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(header,subHeader,msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }  

  chamarAlert(){
    this.presentAlert('Título','Subtítulo','msg');
  }

}
