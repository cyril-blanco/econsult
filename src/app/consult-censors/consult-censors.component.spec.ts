import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCensorsComponent } from './consult-censors.component';

describe('ConsultCensorsComponent', () => {
  let component: ConsultCensorsComponent;
  let fixture: ComponentFixture<ConsultCensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
