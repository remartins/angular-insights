import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTransferComponent } from './value-transfer.component';

describe('ValueTransferComponent', () => {
  let component: ValueTransferComponent;
  let fixture: ComponentFixture<ValueTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
