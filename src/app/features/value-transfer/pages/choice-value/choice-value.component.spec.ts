import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceValueComponent } from './choice-value.component';

describe('ChoiceValueComponent', () => {
  let component: ChoiceValueComponent;
  let fixture: ComponentFixture<ChoiceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
