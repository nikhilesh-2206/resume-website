import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_BASE_URL } from '../../core/config/api.config';


import { ExperienceResponse } from '../../core/models/experience-response';
import { ExperienceResponseService } from '../../core/services/experience-response.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit {

  private experienceResponseService = inject(
    ExperienceResponseService
  );

  private cdr = inject(ChangeDetectorRef);

  experiences: ExperienceResponse[] = [];

  selectedExperience?: ExperienceResponse;

  ngOnInit(): void {

    this.experienceResponseService.getExperiences().subscribe({
      next: (response) => {
        console.log('Experience response:', response);

        this.experiences = response;

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Failed to load experiences:', err);
      }
    });
  }

  selectExperience(experience: ExperienceResponse): void {
    this.selectedExperience = experience;
  }

  closeExperience(): void {
    this.selectedExperience = undefined;
  }
  private apiBaseUrl = inject(API_BASE_URL);

  getCompanyLogo(logo: string | null): string | null {
    if (!logo) {
      return null;
    }

    return `${this.apiBaseUrl}${logo}`;
  }
}
