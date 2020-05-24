import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParcelComponent } from './view-parcel.component';

describe('ViewParcelComponent', () => {
  let component: ViewParcelComponent;
  let fixture: ComponentFixture<ViewParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
