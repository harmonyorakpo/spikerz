import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NetworkNodesComponent } from './network-nodes.component';

describe('NetworkNodesComponent', () => {
  let component: NetworkNodesComponent;
  let fixture: ComponentFixture<NetworkNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkNodesComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
