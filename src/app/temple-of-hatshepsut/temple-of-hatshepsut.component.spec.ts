import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleOfHatshepsutComponent } from './temple-of-hatshepsut.component';

describe('TempleOfHatshepsutComponent', () => {
  let component: TempleOfHatshepsutComponent;
  let fixture: ComponentFixture<TempleOfHatshepsutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleOfHatshepsutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleOfHatshepsutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
