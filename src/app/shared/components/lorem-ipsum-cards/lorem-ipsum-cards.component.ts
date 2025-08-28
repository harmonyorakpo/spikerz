import { Component, inject, OnInit } from '@angular/core';
import { ServerData } from '../../../core/models/server-data';
import { ServerDataService } from '../../../services/server-data.service';

@Component({
  selector: 'app-lorem-ipsum-cards',
  imports: [],
  templateUrl: './lorem-ipsum-cards.component.html',
  styleUrl: './lorem-ipsum-cards.component.scss',
})
export class LoremIpsumCardsComponent implements OnInit {
  private serverDataService = inject(ServerDataService);

  cardData: ServerData[] = [];

  ngOnInit(): void {
    this.serverDataService.getServerData().subscribe((data) => {
      this.cardData = data;
    });
  }

  toggleCard(index: number): void {
    this.cardData[index].isExpanded = !this.cardData[index].isExpanded;
  }
}
