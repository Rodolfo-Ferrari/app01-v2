import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Doar', url: '/logindoar', icon: 'add-circle' },
    { title: 'Notificação', url: '/notificacao', icon: 'notifications-circle' },
    { title: 'Dúvidas', url: '/duvidas', icon: 'help-circle' },
    { title: 'Suporte', url: '/https://sites.google.com/view/parada-pet/p%C3%A1gina-inicial', icon: 'information-circle' },
  ];
  constructor(public auth: AngularFireAuth) {}
}
