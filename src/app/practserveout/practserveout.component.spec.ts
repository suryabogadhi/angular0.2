import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractserveoutComponent } from './practserveout.component';

describe('PractserveoutComponent', () => {
  let component: PractserveoutComponent;
  let fixture: ComponentFixture<PractserveoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractserveoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractserveoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
