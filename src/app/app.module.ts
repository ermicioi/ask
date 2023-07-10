import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { MenuComponent, MenuItemMarker } from './components/core/menu/menu.component';
import { ViewBaseComponent } from './components/shared/view-base/view-base.component';
import { InfoPanelViewComponent } from './views/info-panel-view/info-panel-view.component';
import { InfoPanelModule } from './components/shared/info-panel/info-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MenuComponent,
    MenuItemMarker,
    ViewBaseComponent,
    InfoPanelViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: MainViewComponent },
      { path: 'components/info-panel', component: InfoPanelViewComponent   }
    ]),
    InfoPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
