import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { ContactRequest } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/contact`;

  sendMessage(request: ContactRequest): Observable<void> {

    console.log('ContactService: sending message');

    return this.http.post<void>(
      this.api,
      request
    ).pipe(

      tap({
        next: () => {
          console.log(
            'ContactService: message sent successfully'
          );
        },

        error: (error) => {
          console.error(
            'ContactService: request failed',
            error
          );
        }
      })

    );
  }
}
