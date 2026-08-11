import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ExperienceResponse } from '../models/experience-response';
import { API_BASE_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ExperienceResponseService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/experiences`;

  getExperiences(): Observable<ExperienceResponse[]> {
    return this.http.get<ExperienceResponse[]>(this.api);
  }
}
