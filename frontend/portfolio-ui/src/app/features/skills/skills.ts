import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  SkillCategory
} from '../../core/models/skill-category.model';

import {
  SkillService
} from '../../core/services/skill.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {

  private skillService = inject(SkillService);
  private cdr = inject(ChangeDetectorRef);

  skillCategories: SkillCategory[] = [];

  ngOnInit(): void {

    this.skillService.getSkills().subscribe({

      next: (response) => {

        console.log('Skills response:', response);

        this.skillCategories = response;

        this.cdr.detectChanges();
      },

      error: (err) => {

        console.error(
          'Failed to load skills:',
          err
        );

      }

    });
  }
}
