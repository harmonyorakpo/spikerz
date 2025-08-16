import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Navigation } from '../core/models/navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}
  
  showSideBar: boolean = false;
  currentTitle = new BehaviorSubject<string>('Dashboard');

  setPageTitle(title: string) {
    this.currentTitle.next(title);
  }

  MENUITEMS: Navigation[] = [
    {
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'dashboard.png',
      active: false,
    },
    {
      path: '/alerts',
      title: 'Alerts',
      icon: 'alert.png',
      active: false,
    },
    {
      path: '/properties',
      title: 'Properties',
      icon: 'properties.png',
      active: false,
    },
    {
      path: '/reports',
      title: 'Reports',
      icon: 'reports.png',
      active: false,
    },
    {
      path: '/maintenance',
      title: 'Maintenance',
      icon: 'maintenance.png',
      active: false,
    },
    {
      path: '/documents',
      title: 'Documents',
      icon: 'documents.png',
      active: false,
    },
    {
      path: '/tenants',
      title: 'Tenants',
      icon: 'tenants.png',
      active: false,
    },
    // Bottom section items
    {
      path: '/settings',
      title: 'Settings',
      icon: 'settings.png',
      active: false,
    },
    {
      path: '/support',
      title: 'Support',
      icon: 'support.png',
      active: false,
    },
    {
      path: '/profile',
      title: 'Profile',
      icon: 'profile.png',
      active: false,
    },
  ];

  items = new BehaviorSubject<Navigation[]>(this.MENUITEMS);

  // Method to update active state
  setActiveItem(path: string) {
    this.MENUITEMS.forEach(item => {
      item.active = item.path === path;
    });
    this.items.next(this.MENUITEMS);
  }

  // Method to add menu items dynamically if needed
  addMenuItem(item: Navigation) {
    this.MENUITEMS.push(item);
    this.items.next(this.MENUITEMS);
  }

  // Method to get menu item by path
  getMenuItemByPath(path: string): Navigation | undefined {
    return this.MENUITEMS.find(item => item.path === path);
  }

  // Method to reset all active states
  resetActiveStates() {
    this.MENUITEMS.forEach(item => {
      item.active = false;
    });
    this.items.next(this.MENUITEMS);
  }
}