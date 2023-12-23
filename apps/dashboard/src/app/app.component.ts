import { MaterialModule } from '@angular-production-app/material';
import { UiToolbarComponent } from '@angular-production-app/ui-toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule, MaterialModule,UiToolbarComponent],
  selector: 'angular-production-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Welcome Dashboard';
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/widgets', icon: 'view_list', title: 'Widgets' },
  ];

  private http = inject(HttpClient);
  private router = inject(Router);


  ngOnInit(): void {
    this.http
      .get<{ message: string }>('/api')
      .subscribe((value: { message: string }) => {
        console.log(value);
        this.title = value.message;
      });
  }
  
  onNavigate(path: string) {
    this.router.navigate([path]);
  }
}
