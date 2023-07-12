import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { AskViewComponent } from './components/ask-view/ask-view.component';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    AskViewComponent
  ],
  exports: [
    AskViewComponent,
  ],
  imports: [
    HeaderModule,
    MatIconModule
  ]
})
export class AskViewModule {

}
