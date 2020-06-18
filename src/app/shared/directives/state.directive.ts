import {
  Directive,
  Input,
  HostBinding,
  OnInit,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements  OnInit,OnChanges {
  @Input() state: string;
  @HostBinding('class') nomClass: string;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    this.nomClass = this.formatClass();
  }
  private formatClass() {
    return `state-${this.state.toLowerCase()}`;
  }
}
