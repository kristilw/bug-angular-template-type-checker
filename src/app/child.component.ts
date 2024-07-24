import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: ``,
  inputs: ['classProp', 'declarationProp']
})
export class ChildComponent {
  classProp: string = '';
}

export declare interface ChildComponent {
  declarationProp: string;
}

