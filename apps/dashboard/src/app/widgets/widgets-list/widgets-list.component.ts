import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-production-app/material';
import { Observable } from 'rxjs';
import { Widget } from '@angular-production-app/api-interfaces';

@Component({
  selector: 'angular-production-app-widgets-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './widgets-list.component.html',
  styleUrl: './widgets-list.component.scss',
})
export class WidgetsListComponent {
  @Input() widgets$: Observable<Widget[]> | undefined;
  @Output() updateWidget = new EventEmitter<Widget>();
  @Output() deleteWidget = new EventEmitter<string>();

  
  onUpdate(widget:Widget) {
    if (widget) {
      this.updateWidget.emit(widget);
    }
  }
  onDelete(id: string | null) {
    if (id) {
      this.deleteWidget.emit(id);
    }
  }
}
