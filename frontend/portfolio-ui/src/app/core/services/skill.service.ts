import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_BASE_URL } from '../config/api.config';
import { SkillCategory } from '../models/skill-category.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/skills`;

  getSkills() {
    return this.http.get<SkillCategory[]>(this.api);
  }
}
