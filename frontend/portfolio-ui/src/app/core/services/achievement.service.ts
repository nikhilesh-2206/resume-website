import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/achievements`;

  getAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.api);
  }
}
