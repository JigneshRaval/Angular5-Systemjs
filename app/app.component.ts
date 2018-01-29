import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <link-test-component></link-test-component>

      <template-driven-form-component></template-driven-form-component>

      <list-view-component></list-view-component>

      <filter-list-view-component></filter-list-view-component>
    </div>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent { }
