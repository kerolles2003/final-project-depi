import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleyOfTheKingsComponent } from './valley-of-the-kings.component';

describe('ValleyOfTheKingsComponent', () => {
  let component: ValleyOfTheKingsComponent;
  let fixture: ComponentFixture<ValleyOfTheKingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValleyOfTheKingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValleyOfTheKingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
