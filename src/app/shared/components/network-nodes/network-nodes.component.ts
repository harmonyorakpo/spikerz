import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { NetworkNodeHeroComponent } from '../network-node-hero/network-node-hero.component';
import { NetworkModalComponent } from '../network-modal/network-modal.component';

@Component({
  selector: 'app-network-nodes',
  imports: [
    CommonModule,
    ServerComponent,
    NetworkNodeHeroComponent,
    NetworkModalComponent,
  ],
  templateUrl: './network-nodes.component.html',
  styleUrl: './network-nodes.component.scss',
})
export class NetworkNodesComponent {
  hoveredServerName: string = '';
  private hideTimeout: any;

  onServerHover(serverName: string) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    this.hoveredServerName = serverName;
  }

  onServerLeave() {
    this.hideTimeout = setTimeout(() => {
      this.hoveredServerName = '';
    }, 100);
  }

  ngOnDestroy() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
  }
}
