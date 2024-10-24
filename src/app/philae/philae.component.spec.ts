import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilaeComponent } from './philae.component';

describe('PhilaeComponent', () => {
  let component: PhilaeComponent;
  let fixture: ComponentFixture<PhilaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhilaeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
