import { Injectable } from '@nestjs/common';

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
