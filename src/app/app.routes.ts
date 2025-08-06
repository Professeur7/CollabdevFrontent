import { Routes } from '@angular/router';
//import {IdeesDeProjets} from './features/components-administrateur/idees-de-projets/idees-de-projets';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';
import {DashboardSection} from './features/components-administrateur/dashboard-section/dashboard-section';
import {Domaines} from './features/components-administrateur/domaines/domaines';
import {ParametrerLesBadges} from './features/components-administrateur/parametrer-les-badges/parametrer-les-badges';
import {Projets} from './features/components-administrateur/projets/projets';
import {ParametrerNotifications} from './features/components-administrateur/parametrer-notifications/parametrer-notifications';
import {IdeeDeProjets} from './features/coponents-contributeurs/idee-de-projets/idee-de-projets';
import {IdeeDeProjet} from './features/components-administrateur/idee-de-projet/idee-de-projet';
import { Sidebar } from './features/coponents-contributeurs/sidebar/sidebar';
import { DashboardContributeur } from './features/coponents-contributeurs/dashboard-contributeur/dashboard-contributeur';
import { DasboardContributeurSection } from './features/coponents-contributeurs/dasboard-contributeur-section/dasboard-contributeur-section';
import { ListProjects } from './features/coponents-contributeurs/list-projects/list-projects';

export const routes: Routes = [
  {
    path: "", component: DasboardAdmin, children: [

      {path: "", component: DashboardSection},
    ]
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
  path: "dashboardContributeur",
  component: DashboardContributeur,
  children: [
    {
      path: "",
      component: DasboardContributeurSection // affiché par défaut quand on navigue vers /dashboardContributeur
    }
  ]
},
  {
    path: "projects", 
    component: ListProjects
  }

];
