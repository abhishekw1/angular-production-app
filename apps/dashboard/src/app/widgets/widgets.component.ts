import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-production-app-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss',
})
export class WidgetsComponent {}
