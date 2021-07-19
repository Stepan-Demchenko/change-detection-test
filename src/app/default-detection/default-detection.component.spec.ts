import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDetectionComponent } from './default-detection.component';

describe('DefaultDetectionComponent', () => {
  let component: DefaultDetectionComponent;
  let fixture: ComponentFixture<DefaultDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
