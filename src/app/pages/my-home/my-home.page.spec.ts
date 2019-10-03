import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomePage } from './my-home.page';

describe('MyHomePage', () => {
  let component: MyHomePage;
  let fixture: ComponentFixture<MyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
