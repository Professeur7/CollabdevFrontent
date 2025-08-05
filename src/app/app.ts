import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';
import {SidebarContributeurs} from './features/coponents-contributeurs/sidebar-contributeurs/sidebar-contributeurs';
import {Sidebar} from './features/components-administrateur/sidebar/sidebar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DasboardAdmin, RouterLink, Sidebar, SidebarContributeurs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CollabdevFontend');
}
