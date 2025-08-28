import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { StatusItem } from '../../../core/models/network-hero';
import { CommonModule } from '@angular/common';
import { NetworkService } from '../../../services/network.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-network-node-hero',
  imports: [CommonModule],
  templateUrl: './network-node-hero.component.html',
  styleUrl: './network-node-hero.component.scss',
})
export class NetworkNodeHeroComponent implements OnInit, OnDestroy {
  private NetworkService = inject(NetworkService);
  private destroy$ = new Subject<void>();

  @Input() statusItems: StatusItem[] = [];

  ngOnInit(): void {
    this.NetworkService.getNetworkStatusItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => {
        this.statusItems = items;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
