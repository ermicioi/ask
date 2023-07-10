import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelPropertiesComponent } from './info-panel-properties.component';

describe('InfoPanelPropertiesComponent', () => {
  let component: InfoPanelPropertiesComponent;
  let fixture: ComponentFixture<InfoPanelPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPanelPropertiesComponent]
    });
    fixture = TestBed.createComponent(InfoPanelPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
