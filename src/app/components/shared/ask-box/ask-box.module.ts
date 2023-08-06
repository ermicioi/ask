import { NgModule } from "@angular/core";
import { AskVboxComponent } from "./components/ask-vbox/ask-vbox.component";
import { AskHboxComponent } from './components/ask-hbox/ask-hbox.component';

@NgModule({
  declarations: [
    AskVboxComponent,
    AskHboxComponent
  ],
  exports: [
    AskVboxComponent,
    AskHboxComponent
  ]
})
export class AskBoxModule {

}
