import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoremIpsumComponent } from './lorem-ipsum.component';

describe('LoremIpsumComponent', () => {
  let component: LoremIpsumComponent;
  let fixture: ComponentFixture<LoremIpsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremIpsumComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoremIpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
