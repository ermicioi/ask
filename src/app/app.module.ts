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
import { HeaderViewComponent } from './views/header-view/header-view.component';
import { AskViewModule } from './components/shared/ask-view/ask-view.module';
import { AskHeaderModule } from './components/shared/ask-header/ask-header.module';

const views = [
  MainViewComponent,
  InfoPanelViewComponent,
  HeaderViewComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemMarker,
    ...views
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
    AskViewModule,
    InfoPanelModule,
    AskHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
