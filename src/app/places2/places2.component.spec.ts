import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Places2Component } from './places2.component';

describe('Places2Component', () => {
  let component: Places2Component;
  let fixture: ComponentFixture<Places2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Places2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Places2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
