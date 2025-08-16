import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalComponent } from './portal.component';

export const PORTAL_ROUTES: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];
