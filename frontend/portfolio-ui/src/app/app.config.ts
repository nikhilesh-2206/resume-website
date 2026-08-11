import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { routes } from './app.routes';
import { API_BASE_URL } from './core/config/api.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    {
      provide: API_BASE_URL,
      useValue: environment.apiBaseUrl
    }
  ]
};
