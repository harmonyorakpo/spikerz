import { Component } from '@angular/core';
import { ContentBlockComponentComponent } from '../../../shared/components/content-block-component/content-block-component.component';
import { LoremIpsumComponent } from "../../../shared/components/lorem-ipsum/lorem-ipsum.component";
import { LoremIpsumCardsComponent } from "../../../shared/components/lorem-ipsum-cards/lorem-ipsum-cards.component";

@Component({
  selector: 'app-reports',
  imports: [ContentBlockComponentComponent, LoremIpsumComponent, LoremIpsumCardsComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {}
