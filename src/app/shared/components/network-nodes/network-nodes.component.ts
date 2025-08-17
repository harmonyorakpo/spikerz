import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NetworkConnection, NetworkNode } from '../../../core/models/network-nodes';
import { ServerComponent } from "../server/server.component";
import { NetworkNodeHeroComponent } from "../network-node-hero/network-node-hero.component";

@Component({
  selector: 'app-network-nodes',
  imports: [CommonModule, ServerComponent, NetworkNodeHeroComponent],
  templateUrl: './network-nodes.component.html',
  styleUrl: './network-nodes.component.scss'
})
export class NetworkNodesComponent {
 @Input() networkNodes: NetworkNode[] = [
    {
      id: 'user',
      name: 'Loremipsum',
      iconPath: 'assets/icons/user-icon.png',
      position: { x: 50, y: 150 }
    },
    {
      id: 'server1',
      name: 'Loremipsu',
      iconPath: 'assets/icons/server-icon.png',
      position: { x: 200, y: 100 }
    },
    {
      id: 'server2', 
      name: 'Loremipsu',
      iconPath: 'assets/icons/server-icon.png',
      position: { x: 350, y: 150 }
    },
    {
      id: 'endpoint1',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      iconPath: 'assets/icons/server-icon.png',
      riskLevel: 'Critical',
      position: { x: 550, y: 80 }
    },
    {
      id: 'endpoint2',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2', 
      iconPath: 'assets/icons/server-icon.png',
      riskLevel: 'Critical',
      position: { x: 550, y: 220 }
    }
  ];

  @Input() connections: NetworkConnection[] = [
    {
      from: 'user',
      to: 'server1',
      arrowPath: 'M 80 165 L 180 125'
    },
    {
      from: 'server1',
      to: 'server2', 
      arrowPath: 'M 230 115 L 330 140'
    },
    {
      from: 'server2',
      to: 'endpoint1',
      arrowPath: 'M 380 140 Q 450 100 530 95'
    },
    {
      from: 'server2',
      to: 'endpoint2',
      arrowPath: 'M 380 165 Q 450 200 530 235'
    }
  ];

  getRiskBadgeClasses(riskLevel: string): string {
    switch (riskLevel) {
      case 'Critical':
        return 'bg-red-500';
      case 'High':
        return 'bg-orange-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }

  getNodeClasses(node: NetworkNode): string {
    if (node.id === 'user') {
      return 'bg-purple-100 border-purple-200';
    } else if (node.riskLevel) {
      return 'bg-blue-100 border-blue-200';
    } else {
      return 'bg-blue-100 border-blue-200';
    }
  }
}
