import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <div>{{ title }}</div>
      <input
        #em
        placeholder="Enter email"
        type="email"
        [value]="email"
        (input)="HandelEmail(em.value)"
      />
    </div>
  `,
})
// class Child
export class ChildComponent {
  title: string = 'Child Component';
  count: number = 0;
  email: string = '';

  @Output() ChildProps: EventEmitter<any> = new EventEmitter();

  HandelEmail(em: string): void {
    this.email = em;
    this.count++;
    let resetMail = (): void => {
      this.email = '';
    };
    this.ChildProps.emit({ em, resetMail });
  }
}
