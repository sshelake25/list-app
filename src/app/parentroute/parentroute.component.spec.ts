import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentrouteComponent } from './parentroute.component';

describe('ParentrouteComponent', () => {
  let component: ParentrouteComponent;
  let fixture: ComponentFixture<ParentrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
