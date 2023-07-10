import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBaseComponent } from './view-base.component';

describe('ViewBaseComponent', () => {
  let component: ViewBaseComponent;
  let fixture: ComponentFixture<ViewBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBaseComponent]
    });
    fixture = TestBed.createComponent(ViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
