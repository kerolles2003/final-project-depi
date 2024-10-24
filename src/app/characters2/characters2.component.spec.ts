import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Characters2Component } from './characters2.component';

describe('Characters2Component', () => {
  let component: Characters2Component;
  let fixture: ComponentFixture<Characters2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Characters2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Characters2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
