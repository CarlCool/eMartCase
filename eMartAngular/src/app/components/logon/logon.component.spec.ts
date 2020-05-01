import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonComponent } from './logon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';

describe('LogonComponent', () => {
  let component: LogonComponent;
  let fixture: ComponentFixture<LogonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogonComponent, NgForm ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
