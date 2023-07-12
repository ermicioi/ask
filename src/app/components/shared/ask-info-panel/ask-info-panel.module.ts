import { NgModule } from '@angular/core';
import { AskInfoPanelComponent } from './components/ask-info-panel/ask-info-panel.component';
import { AskInfoPanelPropertiesComponent } from './components/ask-info-panel-properties/ask-info-panel-properties.component';
import { AskInfoPanelMenuComponent } from './components/ask-info-panel-menu/ask-info-panel-menu.component';
import { AskHeaderModule } from '../ask-header/ask-header.module';
import { AskInfoPanelSectionComponent } from './components/ask-info-panel-section/ask-info-panel-section.component';
@NgModule({
  declarations: [
    AskInfoPanelComponent,
    AskInfoPanelPropertiesComponent,
    AskInfoPanelMenuComponent,
    AskInfoPanelSectionComponent
  ],
  exports: [
    AskInfoPanelComponent,
    AskInfoPanelPropertiesComponent,
    AskInfoPanelMenuComponent,
    AskInfoPanelSectionComponent
  ],
  imports: [
    AskHeaderModule
  ]
})
export class AskInfoPanelModule {

}
