import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPodComponent } from './air-pod.component';

describe('AirPodComponent', () => {
  let component: AirPodComponent;
  let fixture: ComponentFixture<AirPodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
