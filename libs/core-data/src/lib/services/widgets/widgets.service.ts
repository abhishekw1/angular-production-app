import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from '@angular-production-app/api-interfaces';
const API_ENDPOINT = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  model = 'widgets';
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Widget[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  create(widget: Widget) {
    return this.http.post<Widget>(this.getUrl(), widget);
  }

  update(widget: Widget) {
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  delete(id:string){
    return this.http.delete(this.getUrlWithId(id));
  }
  private getUrl() {
    return `${API_ENDPOINT}${this.model}`;
  }
  private getUrlWithId(id: string | null) {
    return `${this.getUrl()}/${id}`;
  }
}
