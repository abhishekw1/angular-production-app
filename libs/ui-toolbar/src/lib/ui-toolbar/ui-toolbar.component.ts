import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-production-app/material';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-production-app-ui-toolbar',
  standalone: true,
  imports: [CommonModule, MaterialModule,RouterModule],
  templateUrl: './ui-toolbar.component.html',
  styleUrl: './ui-toolbar.component.scss',
})
export class UiToolbarComponent {
  @Input() title: string = '';
  @Input() links: { path: string; icon: string; title: string }[] = [];
  @Output() toggleSideNav = new EventEmitter();
}
