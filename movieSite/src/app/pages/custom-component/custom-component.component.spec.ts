import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldType } from './custom-component.component';

describe('InputFieldType', () => {
  let component: InputFieldType;
  let fixture: ComponentFixture<InputFieldType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldType ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
