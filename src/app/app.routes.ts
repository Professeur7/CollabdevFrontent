import { Routes } from '@angular/router';
import {IdeesDeProjets} from './coponents/idees-de-projets/idees-de-projets';
import {DasboardAdmin} from './coponents/dasboard-admin/dasboard-admin';
import {DashboardSection} from './coponents/dashboard-section/dashboard-section';
import {Domaines} from './coponents/domaines/domaines';
import {ParametrerLesBadges} from './coponents/parametrer-les-badges/parametrer-les-badges';
import {Projets} from './coponents/projets/projets';
import {ParametrerNotifications} from './coponents/parametrer-notifications/parametrer-notifications';

export const routes: Routes = [
  {
    path: "", component: DashboardSection
  },
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
