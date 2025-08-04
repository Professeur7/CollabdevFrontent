import { Component } from '@angular/core';
import {Sidebar} from "../sidebar/sidebar";
import {Header} from '../header/header';
import {DashboardSection} from '../dashboard-section/dashboard-section';
import {IdeesDeProjets} from '../idees-de-projets/idees-de-projets';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Domaines} from '../domaines/domaines';
import {ParametrerLesBadges} from '../parametrer-les-badges/parametrer-les-badges';
import {Projets} from '../projets/projets';

@Component({
  selector: 'app-dasboard-admin',
  imports: [
    Sidebar,
    Header,
    DashboardSection,
    IdeesDeProjets,
    RouterOutlet,
    Domaines,
    ParametrerLesBadges,
    Projets

  ],
  templateUrl: './dasboard-admin.html',
  styleUrl: './dasboard-admin.css'
})
export class DasboardAdmin {

}
