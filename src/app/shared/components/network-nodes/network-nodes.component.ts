import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";
import { NetworkNodeHeroComponent } from "../network-node-hero/network-node-hero.component";

@Component({
  selector: 'app-network-nodes',
  imports: [CommonModule, ServerComponent, NetworkNodeHeroComponent],
  templateUrl: './network-nodes.component.html',
  styleUrl: './network-nodes.component.scss'
})
export class NetworkNodesComponent {

  
}
