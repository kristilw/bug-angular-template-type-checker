import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child [classProp]="0" [declarationProp]="0" #child/>
    {{child.classProp.foo()}}
    {{child.declarationProp.foo()}}
  `
})
export class AppComponent { }
