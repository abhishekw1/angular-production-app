import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget } from '@angular-production-app/api-interfaces';
import {
  CoreDataModule,
  WidgetsService,
} from '@angular-production-app/core-data';
import { Observable } from 'rxjs';
import { MaterialModule } from '@angular-production-app/material';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';

@Component({
  selector: 'angular-production-app-widgets',
  standalone: true,
  imports: [
    CommonModule,
    CoreDataModule,
    MaterialModule,
    WidgetsListComponent,
    WidgetDetailsComponent,
  ],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss',
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]> | undefined;
  widgetUpdate: Widget | undefined;
  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.widgets$ = this.widgetsService.all();
  }

  create(widget: { widget: Widget; isUpdate: boolean }) {
    if (!widget.isUpdate) {
      this.widgetsService.create(widget.widget).subscribe(() => {
        this.widgets$ = this.widgetsService.all();
      });
    } else {
      this.widgetsService.update(widget.widget).subscribe(() => {
        this.widgets$ = this.widgetsService.all();
      });
    }
  }

  update(widget: Widget) {
    this.widgetUpdate = widget;
  }
  
  delete(id: string) {
    this.widgetsService.delete(id).subscribe(() => {
      this.widgets$ = this.widgetsService.all();
    });
  }
}
