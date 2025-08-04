import { Routes } from '@angular/router';
import {IdeesDeProjets} from './features/components-administrateur/idees-de-projets/idees-de-projets';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';
import {DashboardSection} from './features/components-administrateur/dashboard-section/dashboard-section';
import {Domaines} from './features/components-administrateur/domaines/domaines';
import {ParametrerLesBadges} from './features/components-administrateur/parametrer-les-badges/parametrer-les-badges';
import {Projets} from './features/components-administrateur/projets/projets';
import {ParametrerNotifications} from './features/components-administrateur/parametrer-notifications/parametrer-notifications';
import {InscriptionComponent} from './features/login/inscription-component/inscription-component';
import {ConnexionComponent} from './features/login/connexion-component/connexion-component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  {
    path: "inscription", component: InscriptionComponent
  },
  {
    path: "connexion", component: ConnexionComponent
  },
  /*{
    path: "", component: DashboardSection
  },*/
  {
    path: "ideeProjet", component: IdeesDeProjets
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
  }
];
