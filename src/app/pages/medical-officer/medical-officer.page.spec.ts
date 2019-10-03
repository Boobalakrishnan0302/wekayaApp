import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalOfficerPage } from './medical-officer.page';

describe('MedicalOfficerPage', () => {
  let component: MedicalOfficerPage;
  let fixture: ComponentFixture<MedicalOfficerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalOfficerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalOfficerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
