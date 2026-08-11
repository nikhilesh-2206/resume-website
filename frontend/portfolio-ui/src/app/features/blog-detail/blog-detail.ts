import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map } from 'rxjs';

import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail {

  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  blog = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('slug')),
      switchMap(slug => this.blogService.getBlogBySlug(slug!))
    ),
    {
      initialValue: null
    }
  );
}
