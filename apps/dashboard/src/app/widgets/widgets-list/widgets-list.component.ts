import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-production-app-widgets-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets-list.component.html',
  styleUrl: './widgets-list.component.scss',
})
export class WidgetsListComponent {}
