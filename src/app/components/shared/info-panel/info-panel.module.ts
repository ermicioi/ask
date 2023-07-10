import { NgModule } from '@angular/core';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { InfoPanelHeaderComponent } from './components/info-panel-header/info-panel-header.component';
import { InfoPanelPropertiesComponent } from './components/info-panel-properties/info-panel-properties.component';
import { InfoPanelMenuComponent } from './components/info-panel-menu/info-panel-menu.component';
@NgModule({
  declarations: [
    InfoPanelComponent,
    InfoPanelHeaderComponent,
    InfoPanelPropertiesComponent,
    InfoPanelMenuComponent
  ],
  exports: [
    InfoPanelComponent,
    InfoPanelHeaderComponent,
    InfoPanelPropertiesComponent,
    InfoPanelMenuComponent
  ]
})
export class InfoPanelModule {

}
