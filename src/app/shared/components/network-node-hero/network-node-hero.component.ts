import { Component, Input } from '@angular/core';
import { StatusItem } from '../../../core/models/network-hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-node-hero',
  imports: [CommonModule],
  templateUrl: './network-node-hero.component.html',
  styleUrl: './network-node-hero.component.scss',
})
export class NetworkNodeHeroComponent {
@Input() statusItems: StatusItem[] = [
  {
    id: '1',
    name: 'Lorem',
    iconPath: 'assets/network-nodes/thick-shield.svg',
    backgroundColor: 'bg-red-600',
    textColor: 'text-red-600',
  },
  {
    id: '2',
    name: 'Lorem',
    iconPath: 'assets/network-nodes/thick-shield.svg',
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
  },
  {
    id: '3',
    name: 'Lorem',
    iconPath: 'assets/network-nodes/checked-shield.svg',
    backgroundColor: 'bg-green-600',
    textColor: 'text-green-600',
  },
];

}
