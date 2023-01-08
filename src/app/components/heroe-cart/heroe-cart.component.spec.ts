import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeCartComponent } from './heroe-cart.component';

describe('HeroeCartComponent', () => {
  let component: HeroeCartComponent;
  let fixture: ComponentFixture<HeroeCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
