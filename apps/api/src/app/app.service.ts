import { Injectable } from '@nestjs/common';
import { Widget } from '@angular-production-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): { message: string } {
<<<<<<< Updated upstream
    return { message: 'Welcome dashboard' };
=======
    return { message: 'Welcome Dashboard' };
>>>>>>> Stashed changes
  }
}
