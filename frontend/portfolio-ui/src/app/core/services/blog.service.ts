import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private http = inject(HttpClient);
  private apiBaseUrl = inject(API_BASE_URL);

  private readonly api =
    `${this.apiBaseUrl}/api/v1/blogs`;

  getBlogs(): Observable<Blog[]> {

    console.log('BlogService: making request');

    return this.http.get<Blog[]>(this.api).pipe(

      tap({
        next: (blogs) => {
          console.log(
            'BlogService: response received',
            blogs.length
          );
        },

        error: (error) => {
          console.error(
            'BlogService: request failed',
            error
          );
        }
      })

    );
  }

  getBlogBySlug(slug: string): Observable<Blog> {

    return this.http.get<Blog>(
      `${this.api}/${slug}`
    );
  }
}
