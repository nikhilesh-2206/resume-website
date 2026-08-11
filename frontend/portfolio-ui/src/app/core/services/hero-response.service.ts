import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HeroResponse } from '../models/hero-response';
import { API_BASE_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class HeroResponseService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/hero`;

  getHero(): Observable<HeroResponse> {
    return this.http.get<HeroResponse>(this.api);
  }
}
