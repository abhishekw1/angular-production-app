import { Injectable } from '@angular/core';
<<<<<<< Updated upstream

=======
import { HttpClient } from '@angular/common/http';
import { Widget } from '@angular-production-app/api-interfaces';
import { environment } from '@env/environment';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root',
})
export class WidgetsService {

<<<<<<< Updated upstream
  constructor() { }
=======
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
    return this.http.patch(this.getUrlWithId(widget.id), widget);
  }

  delete(id:string){
    return this.http.delete(this.getUrlWithId(id));
  }
  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }
  private getUrlWithId(id: string | null) {
    return `${this.getUrl()}/${id}`;
  }
>>>>>>> Stashed changes
}
