import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPriceEachComponent } from './section-price-each.component';

describe('SectionPriceEachComponent', () => {
  let component: SectionPriceEachComponent;
  let fixture: ComponentFixture<SectionPriceEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPriceEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPriceEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
