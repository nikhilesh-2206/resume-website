import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  private blogService = inject(BlogService);

  blogs = toSignal(
    this.blogService.getBlogs(),

    {
      initialValue: []
    }
  );
}
