import { NgModule } from '@angular/core';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { InfoPanelHeaderComponent } from './components/info-panel-header/info-panel-header.component';
@NgModule({
  declarations: [
    InfoPanelComponent,
    InfoPanelHeaderComponent
  ],
  exports: [
    InfoPanelComponent,
    InfoPanelHeaderComponent
  ]
})
export class InfoPanelModule {

}
