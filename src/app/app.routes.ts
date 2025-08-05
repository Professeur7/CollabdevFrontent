import { Routes } from '@angular/router';
import {DashboardSection} from './features/coponents-contributeurs/dashboard-section/dashboard-section';
import {Domaines} from './features/components-administrateur/domaines/domaines';
import {ParametrerLesBadges} from './features/components-administrateur/parametrer-les-badges/parametrer-les-badges';
import {Projets} from './features/components-administrateur/projets/projets';
import {ParametrerNotifications} from './features/components-administrateur/parametrer-notifications/parametrer-notifications';
import {InscriptionComponent} from './features/login/inscription-component/inscription-component';
import {ConnexionComponent} from './features/login/connexion-component/connexion-component';
import {IdeeDeProjet} from './features/components-administrateur/idee-de-projet/idee-de-projet';
import {Dashboard} from './features/coponents-contributeurs/dashboard/dashboard';
import {IdeeDeProjets} from './features/coponents-contributeurs/idee-de-projets/idee-de-projets';
import {Reconpenses} from './features/coponents-contributeurs/reconpenses/reconpenses';
import {MesProjet} from './features/coponents-contributeurs/mes-projet/mes-projet';
import {Contributions} from './features/coponents-contributeurs/contributions/contributions';

export const routes: Routes = [
  /*
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  {
    path: "inscription", component: InscriptionComponent
  },
  {
    path: "connexion", component: ConnexionComponent
  },*/
  { path: 'Contributions', component: Contributions },
  {
    path: "", component: Dashboard
  },
  {
    path: "", component: DashboardSection
  },
  {
    path: "ideeProjet", component: IdeeDeProjet
  },

  {
    path: "Domaines", component: Domaines
  },
  {
    path: "ParametrerBadge", component: ParametrerLesBadges
  },
  {
    path: "Projet", component: Projets
  },
  {
    path: "ParemtrerNotication", component: ParametrerNotifications
  },
  {
    path: "IdeeProjetContributeur", component: IdeeDeProjets
  },
  {
    path: "Reconpenses", component: Reconpenses
  },
  {
    path: "ProjetContributeur", component: MesProjet
  },
  {
    path: "IdeeProjetContributeur", component: IdeeDeProjets
  },
];
