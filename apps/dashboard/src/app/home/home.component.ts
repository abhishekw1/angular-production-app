import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-production-app/material';
import { Observable } from 'rxjs';
import { Widget } from '@angular-production-app/api-interfaces';
import {
  CoreDataModule,
  WidgetsService,
} from '@angular-production-app/core-data';

@Component({
  selector: 'angular-production-app-home',
  standalone: true,
  imports: [CommonModule, MaterialModule, CoreDataModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]> | undefined;

  constructor(private widgetsService: WidgetsService) {}
  ngOnInit(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
