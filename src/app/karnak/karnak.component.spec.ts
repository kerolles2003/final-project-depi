import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnakComponent } from './karnak.component';

describe('KarnakComponent', () => {
  let component: KarnakComponent;
  let fixture: ComponentFixture<KarnakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarnakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarnakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
