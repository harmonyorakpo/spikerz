import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  imports: [CommonModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
})
export class ServerComponent {
  @Input() serverName: string = 'Loremipsu';
  @Input() image: string = 'assets/icons/server.svg';
  @Input() background: string = 'bg-blue-100';
  @Input() showTopIcon: boolean = false;
  @Input() topIcon: string = 'assets/network-nodes/shield.svg';
  @Input() circleSize: string = '12';
  @Input() iconSize: string = '6';
  @Input() topIconColor: string = 'bg-red-600';
}
