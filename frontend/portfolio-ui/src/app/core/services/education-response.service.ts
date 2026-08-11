import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../config/api.config';
import { Observable } from 'rxjs';

import { Education } from '../models/education-response.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/educations`;

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.api);
  }
}
