import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DasboardAdmin} from './features/components-administrateur/dasboard-admin/dasboard-admin';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DasboardAdmin,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CollabdevFontend');
}
