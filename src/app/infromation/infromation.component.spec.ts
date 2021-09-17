import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromationComponent } from './infromation.component';

describe('InfromationComponent', () => {
  let component: InfromationComponent;
  let fixture: ComponentFixture<InfromationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfromationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
