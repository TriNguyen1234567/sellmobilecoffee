import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookproComponent } from './macbookpro.component';

describe('MacbookproComponent', () => {
  let component: MacbookproComponent;
  let fixture: ComponentFixture<MacbookproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacbookproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbookproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
