import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ServerData } from '../../../core/models/server-data';
import { ServerDataService } from '../../../services/server-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lorem-ipsum-cards',
  imports: [],
  templateUrl: './lorem-ipsum-cards.component.html',
  styleUrl: './lorem-ipsum-cards.component.scss',
})
export class LoremIpsumCardsComponent implements OnInit, OnDestroy {
  private serverDataService = inject(ServerDataService);
  private destroy$ = new Subject<void>();

  cardData: ServerData[] = [];

  ngOnInit(): void {
    this.serverDataService
      .getServerData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.cardData = data;
      });
  }

  toggleCard(index: number): void {
    this.cardData[index].isExpanded = !this.cardData[index].isExpanded;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
