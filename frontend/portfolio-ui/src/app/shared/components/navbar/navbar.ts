import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ThemeService } from '../../../core/services/themes.service';
import { API_BASE_URL } from '../../../core/config/api.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private themeService = inject(ThemeService);

  readonly apiBaseUrl = inject(API_BASE_URL);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
