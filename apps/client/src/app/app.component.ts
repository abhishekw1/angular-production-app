import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular-production-app/material';
import {
  CoreDataModule,
  WidgetsService,
} from '@angular-production-app/core-data';
import { Observable } from 'rxjs';
import { Widget } from '@angular-production-app/api-interfaces';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, MaterialModule, CoreDataModule, CommonModule],
  selector: 'angular-production-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';
  widgets$: Observable<Widget[]> | undefined;

  constructor(private widgetsService: WidgetsService) {}
  ngOnInit(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
