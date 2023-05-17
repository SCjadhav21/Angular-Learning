import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>
    <h2>Child Component</h2>

    <ng-content></ng-content>
  </div>`,
})
export class ProductComponent {}
