import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule } from '@angular/forms';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ClscompComponent } from './clscomp/clscomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestDirectiveComponent,
    CustomstyleDirective,
    ClscompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
