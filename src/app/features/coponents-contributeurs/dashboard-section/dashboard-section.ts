import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard-section',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard-section.html',
  styleUrl: './dashboard-section.css'
})
export class DashboardSection {

}
