import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  {
    path: 'portal',
    loadChildren: () =>
      import('./pages/portal/portal.routes').then((m) => m.PORTAL_ROUTES),
  },
];
