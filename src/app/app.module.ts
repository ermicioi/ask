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
import { HeaderViewComponent } from './views/header-view/header-view.component';
import { AskViewModule } from './components/shared/ask-view/ask-view.module';
import { AskHeaderModule } from './components/shared/ask-header/ask-header.module';
import { AskInfoPanelModule } from './components/shared/ask-info-panel/ask-info-panel.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExtExpansionPanelViewComponent } from './views/ext-expansion-panel-view/ext-expansion-panel-view.component';
import { AskExtExpansionPanelModule } from './components/shared/ask-ext-expansion-panel/ask-ext-expansion-panel.module';
import { AskCardViewComponent } from './views/ask-card-view/ask-card-view.component';
import { AskCardModule } from './components/shared/ask-card/ask-card.module';

const views = [
  MainViewComponent,
  InfoPanelViewComponent,
  HeaderViewComponent,
  ExtExpansionPanelViewComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemMarker,
    ...views,
    AskCardViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule.forRoot([
      { path: '', component: MainViewComponent },
      { path: 'components/header', component: HeaderViewComponent },
      { path: 'components/info-panel', component: InfoPanelViewComponent },
      { path: 'components/card', component: AskCardViewComponent },
      { path: 'components/ext/expansion-panel', component: ExtExpansionPanelViewComponent }
    ]),
    AskViewModule,
    AskInfoPanelModule,
    AskHeaderModule,
    AskExtExpansionPanelModule,
    AskCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
