import { NgModule } from "@angular/core";
import { AskCardComponent } from './components/ask-card/ask-card.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AskCardComponent
  ],
  exports: [
    AskCardComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AskCardModule {

}
