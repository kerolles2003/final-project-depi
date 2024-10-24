import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdfuComponent } from './edfu.component';

describe('EdfuComponent', () => {
  let component: EdfuComponent;
  let fixture: ComponentFixture<EdfuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdfuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdfuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
