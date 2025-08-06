import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DasboardAdmin } from "./features/components-administrateur/dasboard-admin/dasboard-admin";
import { DashboardContributeur } from './features/coponents-contributeurs/dashboard-contributeur/dashboard-contributeur';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CollabdevFontend');
}
