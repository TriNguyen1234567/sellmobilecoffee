import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DienThoaiCuComponent } from './dien-thoai-cu.component';

describe('DienThoaiCuComponent', () => {
  let component: DienThoaiCuComponent;
  let fixture: ComponentFixture<DienThoaiCuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DienThoaiCuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DienThoaiCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
