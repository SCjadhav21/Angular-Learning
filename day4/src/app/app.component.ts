import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{ title }}</div>
    <h2>Email from Child : {{ mail }}</h2>
    <button (click)="resetMail()">RESET EMAIL</button>
    <hr />
    <hr />
    <hr />
    <app-child (ChildProps)="receivedProps($event)"></app-child>`,
})
export class AppComponent {
  mail: string = '';
  resetChildMail: any;
  title = 'Parent Component';

  resetMail(): void {
    this.mail = '';

    this.resetChildMail();
  }

  receivedProps(props: any) {
    this.mail = props.em;
    this.resetChildMail = props.resetMail;
  }
}
