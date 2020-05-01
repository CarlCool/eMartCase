import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForm }   from '@angular/forms';

import { AdditemComponent } from './additem.component';

describe('AdditemComponent', () => {
  let component: AdditemComponent;
  let fixture: ComponentFixture<AdditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemComponent, NgForm ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
