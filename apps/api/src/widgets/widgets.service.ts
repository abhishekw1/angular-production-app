import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Widget } from '@angular-production-app/api-interfaces';

@Injectable()
export class WidgetsService {
  mockWidgets: Widget[] = [
    { id: '1', title: 'Nest Widget 01', description: 'This is a Nest widget' },
    { id: '2', title: 'Nest Widget 02', description: 'This is a Nest widget' },
    { id: '3', title: 'Nest Widget 03', description: 'This is a Nest widget' },
    { id: '11', title: 'Nest Widget 011', description: 'This is a Nest widget' },
    { id: '12', title: 'Nest Widget 012', description: 'This is a Nest widget' },
    { id: '13', title: 'Nest Widget 013', description: 'This is a Nest widget' },
  ];

  findAll() {
    return this.mockWidgets;
  }

   findOne(id: string) {
    return this.mockWidgets.find((widget) => widget.id === id);
  }

  create(widget: Widget) {
    this.mockWidgets = [...this.mockWidgets, Object.assign({}, widget, { id: uuidv4() })];
    return this.mockWidgets;
  }

  update(id: string, widget: Widget) {
    this.mockWidgets = this.mockWidgets.map((w) => (w.id === id ? widget : w));
    return this.mockWidgets;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter((widget) => widget.id !== id);
    return this.mockWidgets;
  }
}
