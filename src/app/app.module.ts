import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { MenuComponent, MenuItemMarker } from './components/core/menu/menu.component';
import { InfoPanelViewComponent } from './views/info-panel-view/info-panel-view.component';
import { InfoPanelModule } from './components/shared/info-panel/info-panel.module';
import { ViewBaseModule } from './components/shared/view-base/view-base.module';
import { HeaderComponent } from './components/shared/header/components/header/header.component';
import { HeaderViewComponent } from './views/header-view/header-view.component';

const views = [
  MainViewComponent,
  InfoPanelViewComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemMarker,
    ...views,
    HeaderComponent,
    HeaderViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: MainViewComponent },
      { path: 'components/header', component: HeaderViewComponent },
      { path: 'components/info-panel', component: InfoPanelViewComponent }
    ]),
    ViewBaseModule,
    InfoPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
