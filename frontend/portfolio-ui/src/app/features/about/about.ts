import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroResponse } from '../../core/models/hero-response';
import { HeroResponseService } from '../../core/services/hero-response.service';

import { Education } from '../../core/models/education-response.model';
import { EducationService } from '../../core/services/education-response.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {

  private heroResponseService = inject(HeroResponseService);
  private educationService = inject(EducationService);
  private cdr = inject(ChangeDetectorRef);

  hero?: HeroResponse;
  education: Education[] = [];

  ngOnInit(): void {

    this.heroResponseService.getHero().subscribe({
      next: (response) => {
        this.hero = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load hero:', err);
      }
    });

    this.educationService.getEducation().subscribe({
      next: (response) => {
        console.log('Education:', response);
        this.education = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load education:', err);
      }
    });
  }
}
