import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunspecGroupComponent } from './sunspec-group.component';

describe('SunspecGroupComponent', () => {
  let component: SunspecGroupComponent;
  let fixture: ComponentFixture<SunspecGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunspecGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunspecGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
