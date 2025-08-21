import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AssetRiskItem } from '../../../core/models/asset-risk';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-contextual-risk-chart',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './contextual-risk-chart.component.html',
  styleUrl: './contextual-risk-chart.component.scss',
})
export class ContextualRiskChartComponent implements OnInit, OnChanges {
  @Input() assetItems: AssetRiskItem[] = [
    {
      id: '1',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskLevel: 'Critical',
      iconPath: 'assets/icons/server.svg',
    },
    {
      id: '2',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskLevel: 'Critical',
      iconPath: 'assets/icons/server.svg',
    },
    {
      id: '3',
      name: 'Loremipsumdolorsit003',
      ipAddress: '192.168.1.3',
      riskLevel: 'High',
      iconPath: 'assets/icons/server.svg',
    },
    {
      id: '4',
      name: 'Loremipsumdolorsit004',
      ipAddress: '192.168.1.4',
      riskLevel: 'Medium',
      iconPath: 'assets/icons/server.svg',
    },
    {
      id: '5',
      name: 'Loremipsumdolorsit005',
      ipAddress: '192.168.1.5',
      riskLevel: 'Low',
      iconPath: 'assets/icons/server.svg',
    },
    {
      id: '6',
      name: 'Loremipsumdolorsit006',
      ipAddress: '192.168.1.4',
      riskLevel: 'Medium',
      iconPath: 'assets/icons/server.svg',
    },
  ];

  @Input() showPagination: boolean = true;
  @Input() pageSize: number = 2;

  @Output() pageChanged = new EventEmitter<number>();

  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;

  displayedItems: AssetRiskItem[] = [];

  ngOnInit(): void {
    this.calculatePagination();
    this.updateDisplayedItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['assetItems'] || changes['pageSize']) {
      this.calculatePagination();
      this.updateDisplayedItems();
    }
  }

  private calculatePagination(): void {
    this.totalItems = this.assetItems.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);

    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
  }

  private updateDisplayedItems(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.assetItems.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedItems();
      this.pageChanged.emit(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedItems();
      this.pageChanged.emit(this.currentPage);
    }
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.calculatePagination();
    this.updateDisplayedItems();
    this.pageChanged.emit(this.currentPage);
  }

  getPaginationRange(): string {
    if (this.totalItems === 0) return 'Showing 0 of 0';

    const startItem = (this.currentPage - 1) * this.pageSize + 1;
    const endItem = Math.min(this.currentPage * this.pageSize, this.totalItems);

    return `Showing ${startItem}–${endItem} of ${this.totalItems}`;
  }

  getRiskBadgeClasses(riskLevel: string): string {
    switch (riskLevel) {
      case 'Critical':
        return 'bg-red-100 text-red-700';
      case 'High':
        return 'bg-orange-100 text-orange-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }
}
