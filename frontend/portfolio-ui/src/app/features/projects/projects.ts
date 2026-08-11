import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {

  private projectService = inject(ProjectService);
  private cdr = inject(ChangeDetectorRef);

  projects: Project[] = [];

  ngOnInit(): void {

    this.projectService.getProjects().subscribe({

      next: (response) => {
        console.log('Projects response:', response);

        this.projects = response;

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Failed to load projects:', err);
      }

    });
  }

  getTechnologies(technologies: string): string[] {
    return technologies
      .split(',')
      .map(technology => technology.trim())
      .filter(Boolean);
  }
}
