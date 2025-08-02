import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCoins, faMedal} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-section',
  imports: [RouterOutlet, FaIconComponent],
  templateUrl: './dashboard-section.html',
  styleUrl: './dashboard-section.css'
})
export class DashboardSection {

  protected readonly faCoins = faCoins;
  protected readonly faMedal = faMedal;
}
