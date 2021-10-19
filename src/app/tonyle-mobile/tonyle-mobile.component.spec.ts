import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonyleMobileComponent } from './tonyle-mobile.component';

describe('TonyleMobileComponent', () => {
  let component: TonyleMobileComponent;
  let fixture: ComponentFixture<TonyleMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonyleMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonyleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
