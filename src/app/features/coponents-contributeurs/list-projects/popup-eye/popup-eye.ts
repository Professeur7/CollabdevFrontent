import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookmark, faHandshake, faInfoCircle, faTags, faTasks, faTimes, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-eye',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './popup-eye.html',
  styleUrl: './popup-eye.css'
})
export class PopupEye {

  @Input() titreProjet: string = '';
  @Input() niveau: string = '';
  @Input() description: string = '';

  @Output() closeModal = new EventEmitter<void>();

  fermerPopup() {
    this.closeModal.emit();
  }
}
