import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEachComponent } from './section-each.component';

describe('SectionEachComponent', () => {
  let component: SectionEachComponent;
  let fixture: ComponentFixture<SectionEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
