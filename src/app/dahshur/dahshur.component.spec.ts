import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahshurComponent } from './dahshur.component';

describe('DahshurComponent', () => {
  let component: DahshurComponent;
  let fixture: ComponentFixture<DahshurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DahshurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahshurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
