import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule } from '@angular/forms';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ClscompComponent } from './clscomp/clscomp.component';
import { ReactiveProgramComponent } from './reactive-program/reactive-program.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestDirectiveComponent,
    CustomstyleDirective,
    ClscompComponent,
    ReactiveProgramComponent,
    AngMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
