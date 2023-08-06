import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ask-card',
  templateUrl: './ask-card.component.html',
  styleUrls: ['./ask-card.component.scss']
})
export class AskCardComponent {

  @Input() loadable: boolean = false;
  @Input() lazyLoad: boolean = false;
  @Input() state: AskCardState = AskCardState.NONE;

  @Output() load = new EventEmitter<void>();

  AskCardState = AskCardState;

  onCardLoadAction() {
    if (this.loadable) {
      this.load.emit();
    }
  }
}

export enum AskCardState {
  NONE = 'none',
  INITIAL = 'initial',
  LOADING = 'loading'
}

export class AskCardModel {
  constructor(
    readonly loadable: boolean,
    public state: AskCardState) {}
}
