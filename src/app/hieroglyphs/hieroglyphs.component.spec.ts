import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HieroglyphsComponent } from './hieroglyphs.component';

describe('HieroglyphsComponent', () => {
  let component: HieroglyphsComponent;
  let fixture: ComponentFixture<HieroglyphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HieroglyphsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HieroglyphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
