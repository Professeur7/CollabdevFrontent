import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Contributions} from '../contributions/contributions';
import {IdeeDeProjets} from '../idee-de-projets/idee-de-projets';
import {DashboardSection} from '../dashboard-section/dashboard-section';
import {MesProjet} from '../mes-projet/mes-projet';
import {Reconpenses} from '../reconpenses/reconpenses';
import {Sidebar} from '../sidebar/sidebar';
import {Header} from '../header/header';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ RouterOutlet,
  Contributions,
    IdeeDeProjets,
    DashboardSection,
    MesProjet,
    Reconpenses,
    Sidebar,
    Header,
    Dashboard,
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
