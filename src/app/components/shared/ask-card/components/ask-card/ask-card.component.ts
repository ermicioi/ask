import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ask-card',
  templateUrl: './ask-card.component.html',
  styleUrls: ['./ask-card.component.scss']
})
export class AskCardComponent {

  @Input() loadable: boolean = false;

  @Output() load = new EventEmitter<void>();

  onCardLoadAction() {
    if (this.loadable) {
      this.load.emit();
    }
  }
}
