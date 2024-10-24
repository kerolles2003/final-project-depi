import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SphinxComponent } from './sphinx.component';

describe('SphinxComponent', () => {
  let component: SphinxComponent;
  let fixture: ComponentFixture<SphinxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SphinxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SphinxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
