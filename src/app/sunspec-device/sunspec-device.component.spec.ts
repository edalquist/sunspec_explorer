import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunspecDeviceComponent } from './sunspec-device.component';

describe('SunspecDeviceComponent', () => {
  let component: SunspecDeviceComponent;
  let fixture: ComponentFixture<SunspecDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunspecDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunspecDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
