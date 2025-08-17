import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkNodeHeroComponent } from './network-node-hero.component';

describe('NetworkNodeHeroComponent', () => {
  let component: NetworkNodeHeroComponent;
  let fixture: ComponentFixture<NetworkNodeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkNodeHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkNodeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
