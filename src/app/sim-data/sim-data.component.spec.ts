import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimDataComponent } from './sim-data.component';

describe('SimDataComponent', () => {
  let component: SimDataComponent;
  let fixture: ComponentFixture<SimDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
