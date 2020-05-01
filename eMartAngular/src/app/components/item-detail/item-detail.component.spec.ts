import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';

// import { RouterModule } from '@angular/router';

import { RouterTestingModule } from "@angular/router/testing";

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ]
    //   providers: [ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
