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
import { MatExpansionPanelViewComponent } from './views/mat-expansion-panel-view/mat-expansion-panel-view.component';
import { AskMatExpansionPanelModule } from './components/shared/ask-mat-expansion-panel/ask-mat-expansion-panel.module';
import { AskCardViewComponent } from './views/ask-card-view/ask-card-view.component';
import { AskCardModule } from './components/shared/ask-card/ask-card.module';
import { AskPropertyListViewComponent } from './views/ask-property-list-view/ask-property-list-view.component';
import { AskPropertyListComponent } from './components/shared/ask-property-list/components/ask-property-list/ask-property-list.component';
import { AskPropertyListModule } from './components/shared/ask-property-list/ask-property-list.module';
import { AskContainerComponent } from './components/shared/ask-container/components/ask-container/ask-container.component';
import { AskContainerViewComponent } from './views/ask-container-view/ask-container-view.component';
import { AskContainerModule } from './components/shared/ask-container/ask-container.module';
import { AskBoxViewComponent } from './views/ask-box-view/ask-box-view.component';
import { AskVboxComponent } from './components/shared/ask-box/components/ask-vbox/ask-vbox.component';
import { AskBoxModule } from './components/shared/ask-box/ask-box.module';

const views = [
  MainViewComponent,
  InfoPanelViewComponent,
  HeaderViewComponent,
  AskCardViewComponent,
  MatExpansionPanelViewComponent,
  AskPropertyListViewComponent,
  AskContainerViewComponent,
  AskBoxViewComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemMarker,
    ...views,
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
      { path: 'components/ask-container', component: AskContainerViewComponent },
      { path: 'components/ask-box', component: AskBoxViewComponent },
      { path: 'components/ask-property-list', component: AskPropertyListViewComponent },
      { path: 'components/mat-expansion-panel', component: MatExpansionPanelViewComponent }
    ]),
    AskViewModule,
    AskInfoPanelModule,
    AskHeaderModule,
    AskMatExpansionPanelModule,
    AskCardModule,
    AskPropertyListModule,
    AskContainerModule,
    AskBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
