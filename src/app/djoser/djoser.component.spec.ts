import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjoserComponent } from './djoser.component';

describe('DjoserComponent', () => {
  let component: DjoserComponent;
  let fixture: ComponentFixture<DjoserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjoserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjoserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
