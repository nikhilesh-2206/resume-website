import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroResponse } from '../../../../core/models/hero-response';
import { HeroResponseService } from '../../../../core/services/hero-response.service';
import { SocialLink } from '../../../../core/models/social-link.model';
import { SocialLinkService } from '../../../../core/services/social-link.service';
import { AppIcon } from '../../../../shared/components/app-icon/app-icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,AppIcon],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {

  private heroResponseService = inject(HeroResponseService);
  private socialLinkService = inject(SocialLinkService);
  private cdr = inject(ChangeDetectorRef);

  hero?: HeroResponse;
  socialLinks: SocialLink[] = [];

  showSocialLinks = false;

  ngOnInit(): void {

    this.heroResponseService.getHero().subscribe({
      next: (response) => {
        console.log('Hero response:', response);
        this.hero = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load hero:', err);
      }
    });

    this.socialLinkService.getSocialLinks().subscribe({
      next: (links) => {
        console.log('Social links:', links);
        this.socialLinks = links;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load social links:', err);
      }
    });
  }

  toggleSocialLinks(): void {
    this.showSocialLinks = !this.showSocialLinks;
  }
}
