import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
  registerables,
} from 'chart.js';
import { RiskData } from '../../../core/models/risk-data';

Chart.register(...registerables);

@Component({
  selector: 'app-lorem-chart',
  imports: [CommonModule],
  templateUrl: './lorem-chart.component.html',
  styleUrl: './lorem-chart.component.scss',
})
export class LoremChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true })
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() riskData: RiskData = {
    critical: 2,
    high: 0,
    medium: 0,
    low: 0,
  };

  private chart: Chart<'doughnut'> | null = null;

  get totalCritical(): number {
    return this.riskData.critical;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    ctx.clearRect(0, 0, 120, 120);

    this.chartCanvas.nativeElement.width = 120;
    this.chartCanvas.nativeElement.height = 120;

    const total =
      this.riskData.critical +
      this.riskData.high +
      this.riskData.medium +
      this.riskData.low;

    const hasData = total > 0;

    const chartData = hasData
      ? [
          this.riskData.critical,
          this.riskData.high,
          this.riskData.medium,
          this.riskData.low,
        ]
      : [1];

    const chartColors = hasData
      ? ['#EF4444', '#F97316', '#EAB308', '#22C55E']
      : ['#E5E7EB'];

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: chartData,
            backgroundColor: chartColors,
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: hasData,
            callbacks: {
              label: (context) => {
                const labels = ['Critical', 'High', 'Medium', 'Low'];
                const value = context.parsed;
                const percentage =
                  total > 0 ? Math.round((value / total) * 100) : 0;
                return `${
                  labels[context.dataIndex]
                }: ${value} (${percentage}%)`;
              },
            },
          },
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        animation: {
          duration: 1000,
        },
      },
    };

    this.chart = new Chart(ctx, config);
  }

  updateRiskData(newData: RiskData): void {
    this.riskData = { ...newData };
    if (this.chart) {
      const total =
        newData.critical + newData.high + newData.medium + newData.low;
      const hasData = total > 0;

      this.chart.data.datasets[0].data = hasData
        ? [newData.critical, newData.high, newData.medium, newData.low]
        : [1];

      this.chart.data.datasets[0].backgroundColor = hasData
        ? ['#EF4444', '#F97316', '#EAB308', '#22C55E']
        : ['#E5E7EB'];

      this.chart.update();
    }
  }
}
