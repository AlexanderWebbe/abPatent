import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{pageTitle}}</h1>
              <ab-history></ab-history>
              <hr/>
              <ab-claims></ab-claims>
              <ab-terms></ab-terms>
              <ab-termDefinitions></ab-termDefinitions>
            </div>`,
})
export class AppComponent {
  pageTitle = 'abPatent';
}
