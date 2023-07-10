import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelViewComponent } from './info-panel-view.component';

describe('InfoPanelViewComponent', () => {
  let component: InfoPanelViewComponent;
  let fixture: ComponentFixture<InfoPanelViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPanelViewComponent]
    });
    fixture = TestBed.createComponent(InfoPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
