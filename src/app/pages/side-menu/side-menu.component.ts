import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { Navigation } from '../../core/models/navigation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  public menuItems: Navigation[] = [];
  showSideMenu: boolean = true;

  constructor(
    private navigationService: NavigationService,
    private router: Router,
  ) {
    this.navigationService.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
      this.updateActiveStates();
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveStates();
      }
    });
  }

  private updateActiveStates() {
    if (!this.menuItems || this.menuItems.length === 0) return;

    this.menuItems.forEach((menuItem) => {
      menuItem.active = this.isActiveRoute(menuItem.path);
    });
  }

  isActiveRoute(path?: string): boolean {
    if (!path) return false;

    const currentUrl = this.router.url;
    const cleanCurrentUrl = currentUrl.split('?')[0].split('#')[0];
    const pathToCheck = path.startsWith('/') ? path : '/' + path;

    return (
      cleanCurrentUrl === pathToCheck ||
      cleanCurrentUrl.endsWith(pathToCheck) ||
      cleanCurrentUrl.startsWith(pathToCheck + '/')
    );
  }

  navigateToRoute(path?: string) {
    if (path) {
      const navigationPath = path.startsWith('/') ? path : '/' + path;
      this.router.navigate([navigationPath]);
    }
  }

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  logout() {
    console.log('Logging out...');
  }
}
