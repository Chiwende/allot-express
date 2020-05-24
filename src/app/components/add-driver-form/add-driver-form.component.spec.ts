import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDriverFormComponent } from './add-driver-form.component';

describe('AddDriverFormComponent', () => {
  let component: AddDriverFormComponent;
  let fixture: ComponentFixture<AddDriverFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDriverFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
