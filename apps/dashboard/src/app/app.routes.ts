import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '**', redirectTo: '/' },
];
