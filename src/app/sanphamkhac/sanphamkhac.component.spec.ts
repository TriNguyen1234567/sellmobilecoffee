import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamkhacComponent } from './sanphamkhac.component';

describe('SanphamkhacComponent', () => {
  let component: SanphamkhacComponent;
  let fixture: ComponentFixture<SanphamkhacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamkhacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamkhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
