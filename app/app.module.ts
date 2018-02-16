import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LinkTestComponent } from './components/ngzone-events/link-test.component';
import { OutSideEventHandlerDirective } from './components/ngzone-events/outside-zone-event.directive';
import { TemplateDrivenFormComponent } from './components/form-example/template-driven-form.component';
import { ListViewComponent } from './components/json-service/list-display.component';

// Pipes Examples
import { SearchFilterPipe } from './components/pipes-example/search-filter-list.pipe';
import { FilterListViewComponent } from './components/pipes-example/list-view.component';
import { UpperCasePipe } from './components/pipes-example/uppercase.filter';

import { IframeComponent } from './components/safe-url-pipe/iframe.component';
import { SafeURLPipe } from './components/safe-url-pipe/safe-url-pipe.pipe';
import { SafeURLPipe2 } from './components/safe-url-pipe/safe-url-pipe2.pipe';

import { ParentOneComponent } from './components/data-sharing-example/parent-to-child/parent.component';
import { ChildOneComponent } from './components/data-sharing-example/parent-to-child/child.component';

import { ParentTwoComponent } from './components/data-sharing-example/child-to-parent/parent.component';
import { ChildTwoComponent } from './components/data-sharing-example/child-to-parent/child.component';

import { ParentThreeComponent } from './components/data-sharing-example/using-service/parent.component';
import { Sibling1Component } from './components/data-sharing-example/using-service/child1.component';
import { Sibling2Component } from './components/data-sharing-example/using-service/child2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LinkTestComponent,
    OutSideEventHandlerDirective,
    TemplateDrivenFormComponent,
    ListViewComponent,
    SearchFilterPipe,
    UpperCasePipe,
    FilterListViewComponent,
    SafeURLPipe,
    SafeURLPipe2,
    IframeComponent,
    ParentOneComponent,
    ChildOneComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    ParentThreeComponent,
    Sibling1Component,
    Sibling2Component
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
