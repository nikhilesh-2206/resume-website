import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Achievement } from '../../core/models/achievement.model';
import { AchievementService } from '../../core/services/achievement.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements implements OnInit {

  private achievementService = inject(AchievementService);
  private cdr = inject(ChangeDetectorRef);

  achievements: Achievement[] = [];

  ngOnInit(): void {

    this.achievementService.getAchievements().subscribe({
      next: (response) => {
        console.log('Achievements:', response);

        this.achievements = response;

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Failed to load achievements:', err);
      }
    });
  }
}
