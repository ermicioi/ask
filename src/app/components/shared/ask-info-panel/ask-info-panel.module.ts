import { NgModule } from '@angular/core';
import { AskInfoPanelComponent } from './components/ask-info-panel/ask-info-panel.component';
import { AskInfoPanelPropertiesComponent } from './components/ask-info-panel-properties/ask-info-panel-properties.component';
import { AskInfoPanelMenuComponent } from './components/ask-info-panel-menu/ask-info-panel-menu.component';
import { AskHeaderModule } from '../ask-header/ask-header.module';
@NgModule({
  declarations: [
    AskInfoPanelComponent,
    AskInfoPanelPropertiesComponent,
    AskInfoPanelMenuComponent
  ],
  exports: [
    AskInfoPanelComponent,
    AskInfoPanelPropertiesComponent,
    AskInfoPanelMenuComponent
  ],
  imports: [
    AskHeaderModule
  ]
})
export class AskInfoPanelModule {

}
