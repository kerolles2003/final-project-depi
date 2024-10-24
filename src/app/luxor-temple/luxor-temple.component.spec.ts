import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxorTempleComponent } from './luxor-temple.component';

describe('LuxorTempleComponent', () => {
  let component: LuxorTempleComponent;
  let fixture: ComponentFixture<LuxorTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxorTempleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxorTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
