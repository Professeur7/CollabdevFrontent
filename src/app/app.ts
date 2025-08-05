import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';
import {ConnexionComponent} from './features/login/connexion-component/connexion-component';
import {InscriptionComponent} from './features/login/inscription-component/inscription-component';
import {Dashboard} from './features/coponents-contributeurs/dashboard/dashboard';
import {DashboardSection} from './features/coponents-contributeurs/dashboard-section/dashboard-section';
import {MesProjet} from './features/coponents-contributeurs/mes-projet/mes-projet';
import {Reconpenses} from './features/coponents-contributeurs/reconpenses/reconpenses';
import {Contributions} from './features/coponents-contributeurs/contributions/contributions';
import {IdeeDeProjets} from './features/coponents-contributeurs/idee-de-projets/idee-de-projets';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InscriptionComponent, RouterLink, ConnexionComponent, Dashboard, DashboardSection, MesProjet, Reconpenses, Contributions, IdeeDeProjets ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CollabdevFontend');
}
