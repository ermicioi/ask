import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelMenuComponent } from './info-panel-menu.component';

describe('InfoPanelMenuComponent', () => {
  let component: InfoPanelMenuComponent;
  let fixture: ComponentFixture<InfoPanelMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPanelMenuComponent]
    });
    fixture = TestBed.createComponent(InfoPanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
