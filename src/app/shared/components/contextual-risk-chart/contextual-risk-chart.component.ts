import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetRiskItem } from '../../../core/models/asset-risk';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-contextual-risk-chart',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './contextual-risk-chart.component.html',
  styleUrl: './contextual-risk-chart.component.scss'
})
export class ContextualRiskChartComponent {
  @Input() assetItems: AssetRiskItem[] = [
    {
      id: '1',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskLevel: 'Critical',
      iconPath: 'assets/icons/server.png'
    },
    {
      id: '2',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskLevel: 'Critical',
      iconPath: 'assets/icons/server.png'
    }
  ];

  @Input() showPagination: boolean = true;
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 2;
  @Input() totalItems: number = 2;
  @Input() pageSize: number = 2;
  
  @Output() pageChanged = new EventEmitter<number>();

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.pageChanged.emit(this.currentPage);
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
