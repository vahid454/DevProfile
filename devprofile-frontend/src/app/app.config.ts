import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// Handle GitHub Pages 404 redirect
const handleRedirect = (router: Router) => {
  return () => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // Remove leading slash and navigate
      const path = redirect.startsWith('/') ? redirect.substring(1) : redirect;
      router.navigateByUrl(path || '/');
    }
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: handleRedirect,
      deps: [Router],
      multi: true
    }
  ]
};
