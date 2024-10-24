import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuSimbelComponent } from './abu-simbel.component';

describe('AbuSimbelComponent', () => {
  let component: AbuSimbelComponent;
  let fixture: ComponentFixture<AbuSimbelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbuSimbelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbuSimbelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
