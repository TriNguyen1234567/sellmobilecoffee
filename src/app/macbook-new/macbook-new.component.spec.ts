import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookNewComponent } from './macbook-new.component';

describe('MacbookNewComponent', () => {
  let component: MacbookNewComponent;
  let fixture: ComponentFixture<MacbookNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacbookNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
