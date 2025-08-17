import { Component } from '@angular/core';
import { ContentBlockComponentComponent } from '../../../shared/components/content-block-component/content-block-component.component';
import { LoremIpsumComponent } from "../../../shared/components/lorem-ipsum/lorem-ipsum.component";
import { LoremIpsumCardsComponent } from "../../../shared/components/lorem-ipsum-cards/lorem-ipsum-cards.component";
import { ContextualRiskChartComponent } from "../../../shared/components/contextual-risk-chart/contextual-risk-chart.component";
import { LoremChartComponent } from "../../../shared/components/lorem-chart/lorem-chart.component";
import { NetworkNodesComponent } from "../../../shared/components/network-nodes/network-nodes.component";

@Component({
  selector: 'app-reports',
  imports: [ContentBlockComponentComponent, LoremIpsumComponent, LoremIpsumCardsComponent, ContextualRiskChartComponent, LoremChartComponent, NetworkNodesComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {}
