import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { AssetRiskItem } from '../../../core/models/asset-risk';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AssetRiskService } from '../../../services/asset-risk.service';

@Component({
  selector: 'app-contextual-risk-chart',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './contextual-risk-chart.component.html',
  styleUrl: './contextual-risk-chart.component.scss',
})
export class ContextualRiskChartComponent implements OnInit, OnChanges {
  private assetService = inject(AssetRiskService);
  @Input() assetItems: AssetRiskItem[] = [];

  @Input() showPagination: boolean = true;
  @Input() pageSize: number = 2;

  @Output() pageChanged = new EventEmitter<number>();

  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;

  displayedItems: AssetRiskItem[] = [];

  ngOnInit(): void {
    this.assetService.getAssetItems().subscribe((items) => {
      this.assetItems = items;
      this.calculatePagination();
      this.updateDisplayedItems();
    });
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
