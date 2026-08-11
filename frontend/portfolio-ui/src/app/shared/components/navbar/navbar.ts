import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ThemeService } from '../../../core/services/themes.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
