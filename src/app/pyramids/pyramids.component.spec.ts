import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidsComponent } from './pyramids.component';

describe('PyramidsComponent', () => {
  let component: PyramidsComponent;
  let fixture: ComponentFixture<PyramidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyramidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
