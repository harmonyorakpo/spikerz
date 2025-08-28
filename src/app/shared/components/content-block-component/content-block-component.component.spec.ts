import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockComponentComponent } from './content-block-component.component';

describe('ContentBlockComponentComponent', () => {
  let component: ContentBlockComponentComponent;
  let fixture: ComponentFixture<ContentBlockComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBlockComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentBlockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
