import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout').then(
        (m) => m.MainLayout
      ),

    children: [

      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then(
            (m) => m.Home
          ),
      },

      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about').then(
            (m) => m.About
          ),
      },

      {
        path: 'experience',
        loadComponent: () =>
          import('./features/experience/experience').then(
            (m) => m.Experience
          ),
      },

      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects').then(
            (m) => m.Projects
          ),
      },

      {
        path: 'skills',
        loadComponent: () =>
          import('./features/skills/skills').then(
            (m) => m.Skills
          ),
      },

      {
        path: 'achievements',
        loadComponent: () =>
          import('./features/achievements/achievements').then(
            (m) => m.Achievements
          ),
      },

      // Blog list
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog').then(
            (m) => m.Blog
          ),
      },

      // Individual blog article
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./features/blog-detail/blog-detail').then(
            (m) => m.BlogDetail
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact').then(
            (m) => m.Contact
          ),
      },

    ],
  },
];
