import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    FilterListViewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
