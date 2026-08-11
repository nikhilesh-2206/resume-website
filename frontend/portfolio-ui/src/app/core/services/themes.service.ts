import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly storageKey = 'portfolio-theme';

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const isDark = document.documentElement.classList.contains('dark');

    this.setTheme(isDark ? 'light' : 'dark');
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  private setTheme(theme: 'light' | 'dark'): void {

    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    );

    localStorage.setItem(
      this.storageKey,
      theme
    );
  }

  private initializeTheme(): void {

    const savedTheme = localStorage.getItem(this.storageKey);

    if (savedTheme === 'dark') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }
}
