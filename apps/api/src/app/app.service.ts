import { Injectable } from '@nestjs/common';
import { Widget } from '@angular-production-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome Dashboard' };
  }
  getWidgets(): Widget[] {
    return [
      {
        id: '1',
        title: 'Widget 01',
        description: 'Pending...',
      },
      {
        id: '2',
        title: 'Widget 02',
        description: 'Pending...',
      },
      {
        id: '3',
        title: 'Widget 03',
        description: 'Pending...',
      },
    ];
  }
}
