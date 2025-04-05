import { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app.routes';
import { provideCore } from './core/core';

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes: appRoutes })],
};
