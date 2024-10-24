import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hieroglyphs2Component } from './hieroglyphs2.component';

describe('Hieroglyphs2Component', () => {
  let component: Hieroglyphs2Component;
  let fixture: ComponentFixture<Hieroglyphs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hieroglyphs2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hieroglyphs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
