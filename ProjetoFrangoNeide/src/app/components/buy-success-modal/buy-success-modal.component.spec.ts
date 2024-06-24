import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySuccessModalComponent } from './buy-success-modal.component';

describe('BuySuccessModalComponent', () => {
  let component: BuySuccessModalComponent;
  let fixture: ComponentFixture<BuySuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuySuccessModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuySuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
