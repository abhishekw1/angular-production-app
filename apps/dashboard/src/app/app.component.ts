import { MaterialModule } from '@angular-production-app/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule,MaterialModule],
  selector: 'angular-production-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<{ message: string }>('/api').subscribe((value: { message: string }) => {
      console.log(value);
      this.title = value.message;
    });
  }
}
