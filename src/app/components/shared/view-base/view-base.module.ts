import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ViewBaseComponent } from './components/view-base/view-base.component';
import { HeaderModule } from '../header/header.module';
@NgModule({
  declarations: [
    ViewBaseComponent
  ],
  exports: [
    ViewBaseComponent,
  ],
  imports: [
    HeaderModule,
    MatIconModule
  ]
})
export class ViewBaseModule {

}
