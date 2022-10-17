import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunspecModelComponent } from './sunspec-model.component';

describe('SunspecModelComponent', () => {
  let component: SunspecModelComponent;
  let fixture: ComponentFixture<SunspecModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunspecModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunspecModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
