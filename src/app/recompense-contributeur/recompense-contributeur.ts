import { Component } from '@angular/core';
import { faChartLine, faBolt, faMedal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'recompense',
  imports: [],
  templateUrl: './recompense-contributeur.component.html',
  styleUrl: './recompense-contributeur.component.css'
})
export class RecompenseContributeur {
  faChartLine = faChartLine;
  faBolt = faBolt;
  faMedal = faMedal;

}
