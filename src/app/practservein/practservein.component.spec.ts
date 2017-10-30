import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractserveinComponent } from './practservein.component';

describe('PractserveinComponent', () => {
  let component: PractserveinComponent;
  let fixture: ComponentFixture<PractserveinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractserveinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractserveinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
