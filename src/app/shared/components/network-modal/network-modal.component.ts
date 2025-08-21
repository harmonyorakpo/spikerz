import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-network-modal',
  imports: [CommonModule],
  templateUrl: './network-modal.component.html',
  styleUrl: './network-modal.component.scss',
})
export class NetworkModalComponent {
  @Input() backgroundType!: string;
  @Input() item!: string;
  @Input() address!: string;

  ipAddresses: string[] = [
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
    '1.2.3.4',
  ];

  ips: string[] = ['1.2.3.4', '1.2.3.4'];
}
