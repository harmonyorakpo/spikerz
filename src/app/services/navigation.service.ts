import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Navigation } from '../core/models/navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}
  showSideBar: boolean = false;
  currentTitle = new BehaviorSubject<string>('');

  setPageTitle(title: string) {
    this.currentTitle.next(title);
  }

  MENUITEMS: Navigation[] = [
    {
      path: 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard.png',
      active: false,
    },
    {
      path: 'alerts',
      title: 'Alerts',
      icon: 'alert.png',
      active: false,
    },
    {
      path: 'properties',
      title: 'Properties',
      icon: 'properties.png',
      active: false,
    },
    {
      path: 'reports',
      title: 'Reports',
      icon: 'reports.png',
      active: true,
    },
    {
      path: 'maintenance',
      title: 'Maintenance',
      icon: 'maintenance.png',
      active: false,
    },
    {
      path: 'documents',
      title: 'Documents',
      icon: 'documents.png',
      active: false,
    },
    {
      path: 'tenants',
      title: 'Tenants',
      icon: 'tenants.png',
      active: false,
    },
    // Separator for bottom section
    {
      path: 'settings',
      title: 'Settings',
      icon: 'settings.png', // Gear/settings icon
      active: false,
    },
    {
      path: 'support',
      title: 'Support',
      icon: 'support.png', // Headset/support icon
      active: false,
    },
    {
      path: 'profile',
      title: 'Profile',
      icon: 'profile.png', // User profile icon (bottom circular one)
      active: false,
    },
    // {
    //   path: 'logout',
    //   title: 'Logout',
    //   icon: 'logout.svg',
    //   iconActive: 'logout-active.svg',
    //   active: false,
    // },
  ];

  items = new BehaviorSubject<Navigation[]>(this.MENUITEMS);
}
