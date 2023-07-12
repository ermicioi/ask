import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AskHeaderComponent } from './components/header/ask-header.component';
@NgModule({
  declarations: [
    AskHeaderComponent
  ],
  exports: [
    AskHeaderComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AskHeaderModule {

}
