import { Routes } from '@angular/router';
import {IdeesDeProjets} from './coponents/idees-de-projets/idees-de-projets';
import {DasboardAdmin} from './coponents/dasboard-admin/dasboard-admin';
import {DashboardSection} from './coponents/dashboard-section/dashboard-section';

export const routes: Routes = [
  {
    path: "", component: DashboardSection
  },
  {
    path: "idee", component: IdeesDeProjets
  },

  {
    path: "**", redirectTo: ""
  }
];
