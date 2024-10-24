import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarnaComponent } from './amarna.component';

describe('AmarnaComponent', () => {
  let component: AmarnaComponent;
  let fixture: ComponentFixture<AmarnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmarnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmarnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
