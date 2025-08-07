import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-comments',
  imports: [DatePipe, CommonModule],
  templateUrl: './popup-comments.html',
  styleUrl: './popup-comments.css'
})
export class PopupComments {
  @Input() comments: { nom: string; date: Date; message: string }[] = [];
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
