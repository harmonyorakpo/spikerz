import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ReportsComponent } from './reports.component';
import { ContentBlockDataService } from '../../../services/content-block-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';

// Mock child components used in ReportsComponent template
@Component({
  selector: 'app-content-block-component',
  template: '',
  standalone: true,
})
class MockContentBlockComponent {
  @Input() title!: string;
  @Input() description!: string;
}

@Component({
  selector: 'app-lorem-ipsum',
  template: '',
  standalone: true,
})
class MockLoremIpsumComponent {}

@Component({
  selector: 'app-lorem-ipsum-cards',
  template: '',
  standalone: true,
})
class MockLoremIpsumCardsComponent {}

@Component({
  selector: 'app-network-nodes',
  template: '',
  standalone: true,
})
class MockNetworkNodesComponent {}

@Component({
  selector: 'app-contextual-risk-chart',
  template: '',
  standalone: true,
})
class MockContextualRiskChartComponent {}

@Component({
  selector: 'app-lorem-chart',
  template: '',
  standalone: true,
})
class MockLoremChartComponent {
  @Input() riskData: any = { critical: 0, high: 0, medium: 0, low: 0 };
}

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;
  let mockContentBlockDataService: jasmine.SpyObj<ContentBlockDataService>;

  beforeEach(async () => {
    mockContentBlockDataService = jasmine.createSpyObj(
      'ContentBlockDataService',
      ['getContentData'],
    );
    mockContentBlockDataService.getContentData.and.returnValue(
      of([
        {
          id: 1,
          title: 'Test Block',
          description: 'Test Description',
        },
      ]),
    );

    await TestBed.configureTestingModule({
      imports: [
        ReportsComponent,
        HttpClientTestingModule,
        MockContentBlockComponent,
        MockLoremIpsumComponent,
        MockLoremIpsumCardsComponent,
        MockNetworkNodesComponent,
        MockContextualRiskChartComponent,
        MockLoremChartComponent,
      ],
      providers: [
        {
          provide: ContentBlockDataService,
          useValue: mockContentBlockDataService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
