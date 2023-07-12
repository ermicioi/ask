import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { AskViewComponent } from './components/ask-view/ask-view.component';
import { AskHeaderModule } from '../ask-header/ask-header.module';
@NgModule({
  declarations: [
    AskViewComponent
  ],
  exports: [
    AskViewComponent,
  ],
  imports: [
    AskHeaderModule,
    MatIconModule
  ]
})
export class AskViewModule {

}
