import { Component, ContentChildren , Directive, AfterViewInit, QueryList, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMenuItem]'
})
export class MenuItemMarker {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  @ContentChildren (MenuItemMarker) elements: QueryList<any> | null = null;

  ngAfterViewInit() {
    this.elements?.forEach(div => console.log(div));
  }

}

