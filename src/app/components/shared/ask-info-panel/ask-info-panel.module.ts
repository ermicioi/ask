import { NgModule } from '@angular/core';
import { AskInfoPanelComponent } from './components/ask-info-panel/ask-info-panel.component';
import { AskInfoPanelHeaderComponent } from './components/ask-info-panel-header/ask-info-panel-header.component';
import { AskInfoPanelPropertiesComponent } from './components/ask-info-panel-properties/ask-info-panel-properties.component';
import { AskInfoPanelMenuComponent } from './components/ask-info-panel-menu/ask-info-panel-menu.component';
@NgModule({
  declarations: [
    AskInfoPanelComponent,
    AskInfoPanelHeaderComponent,
    AskInfoPanelPropertiesComponent,
    AskInfoPanelMenuComponent
  ],
  exports: [
    AskInfoPanelComponent,
    AskInfoPanelHeaderComponent,
    AskInfoPanelPropertiesComponent,
    AskInfoPanelMenuComponent
  ]
})
export class AskInfoPanelModule {

}
