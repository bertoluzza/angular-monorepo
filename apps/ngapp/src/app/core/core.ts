import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import {
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);

export interface CoreOptions {
  routes: Routes;
}

export function noop() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const fn = function () {};
  return fn;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    // provideExperimentalZonelessChangeDetection(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    { provide: LOCALE_ID, useValue: 'it-IT' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },

    // other 3rd party libraries providers like NgRx, provideStore()

    // other application specific providers and setup

    // perform initialization, has to be last
    provideAppInitializer(() => {
      // add init logic here...
      // kickstart processes, trigger initial requests or actions, ...
      const initializerFn = noop();
      return initializerFn();
    }),
  ];
}
