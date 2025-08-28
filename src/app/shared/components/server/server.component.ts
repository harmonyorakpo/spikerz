import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() iconSize: string = '6';
  @Input() topIconColor: string = 'bg-red-600';
  @Input() address: string = '';

  @Output() serverHover = new EventEmitter<{
    serverName: string;
    address: string;
  }>();
  @Output() serverLeave = new EventEmitter<void>();

  onMouseEnter() {
    this.serverHover.emit({
      serverName: this.serverName,
      address: this.address || '',
    });
  }

  onMouseLeave() {
    this.serverLeave.emit();
  }
}
