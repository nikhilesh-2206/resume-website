import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { SocialLink } from '../models/social-link.model';

@Injectable({
  providedIn: 'root'
})
export class SocialLinkService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/social-links`;

  getSocialLinks(): Observable<SocialLink[]> {
    return this.http.get<SocialLink[]>(this.api);
  }
}
