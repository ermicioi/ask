import { Component } from '@angular/core';

@Component({
  selector: 'app-ask-card-view',
  templateUrl: './ask-card-view.component.html',
  styleUrls: ['./ask-card-view.component.scss']
})
export class AskCardViewComponent {

  onCardLoad(): void {
    console.log('Load event fired by card')
  }

}
