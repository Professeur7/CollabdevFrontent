import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBell, faMoon, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FaIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly faUserCircle = faUserCircle;
  protected readonly faBell = faBell;
  protected readonly faMoon = faMoon;

  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark-theme', this.darkMode);
  }
}
