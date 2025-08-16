import { Routes } from '@angular/router';
import { ReportsComponent } from './Reports/reports.component';
import { PortalComponent } from './portal.component';

export const PORTAL_ROUTES: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', redirectTo: 'reports', pathMatch: 'full' },
      { path: 'reports', component: ReportsComponent },
    ],
  },
];
