import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveModal: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
    this.closeModal.emit();
  }

  save() {
    this.saveModal.emit();
    this.close();  // Đảm bảo modal đóng sau khi lưu
  }
}
