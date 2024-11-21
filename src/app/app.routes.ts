import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/components/landing-page/landing-page.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
];
