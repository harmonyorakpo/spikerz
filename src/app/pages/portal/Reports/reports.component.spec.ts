import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ReportsComponent } from './reports.component';
import { ContentBlockDataService } from '../../../services/content-block-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

// Mock child components used in ReportsComponent template
@Component({ selector: 'app-content-block-component', template: '' })
class MockContentBlockComponent {}
@Component({ selector: 'app-lorem-ipsum', template: '' })
class MockLoremIpsumComponent {}
@Component({ selector: 'app-lorem-ipsum-cards', template: '' })
class MockLoremIpsumCardsComponent {}
@Component({ selector: 'app-network-nodes', template: '' })
class MockNetworkNodesComponent {}
@Component({ selector: 'app-contextual-risk-chart', template: '' })
class MockContextualRiskChartComponent {}
@Component({ selector: 'app-lorem-chart', template: '' })
class MockLoremChartComponent {}

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
      imports: [ReportsComponent, HttpClientTestingModule],
      declarations: [
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get content blocks from the service', (done) => {
    component.contentBlocks$.subscribe((data) => {
      expect(data).toEqual([
        {
          id: 1,
          title: 'Test Block',
          description: 'Test Description',
        },
      ]);
      done();
    });
  });
});
