import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';
import {ConnexionComponent} from './features/login/connexion-component/connexion-component';
import {InscriptionComponent} from './features/login/inscription-component/inscription-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InscriptionComponent, RouterLink, ConnexionComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CollabdevFontend');
}
