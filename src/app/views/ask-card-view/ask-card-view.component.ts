import { Component } from '@angular/core';
import { AskCardModel, AskCardState } from 'src/app/components/shared/ask-card/components/ask-card/ask-card.component';

@Component({
  selector: 'app-ask-card-view',
  templateUrl: './ask-card-view.component.html',
  styleUrls: ['./ask-card-view.component.scss']
})
export class AskCardViewComponent {

  loadableCardModel: AskCardModel = new AskCardModel(true, AskCardState.INITIAL);

  onCardLoad(): void {
    this.loadableCardModel.state = AskCardState.LOADING;

    setTimeout(() => this.loadableCardModel.state = AskCardState.NONE, 3000);
  }

}
