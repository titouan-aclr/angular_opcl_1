import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideClientHydration} from '@angular/platform-browser';
import {routes} from './app.routes';
import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(CoreModule, LandingPageModule)
  ]
};
