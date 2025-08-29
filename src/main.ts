import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppConfig, APP_CONFIG } from './app/services/config/config';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err),
// );

fetch('/assets/config/config.json')
  .then((response) => response.json())
  .then((config: AppConfig) => {
    bootstrapApplication(AppComponent, {
      providers: [
        provideHttpClient(),

        provideRouter(routes),
        { provide: APP_CONFIG, useValue: config },
      ],
    }).catch((err) => console.error(err));
  });
