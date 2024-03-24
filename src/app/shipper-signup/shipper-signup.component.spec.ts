import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperSignupComponent } from './shipper-signup.component';

describe('ShipperSignupComponent', () => {
  let component: ShipperSignupComponent;
  let fixture: ComponentFixture<ShipperSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipperSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipperSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
