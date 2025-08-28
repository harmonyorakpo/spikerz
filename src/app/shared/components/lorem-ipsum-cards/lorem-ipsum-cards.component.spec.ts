import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsumCardsComponent } from './lorem-ipsum-cards.component';

describe('LoremIpsumCardsComponent', () => {
  let component: LoremIpsumCardsComponent;
  let fixture: ComponentFixture<LoremIpsumCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremIpsumCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoremIpsumCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
