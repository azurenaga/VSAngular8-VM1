import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { TestService } from './test.service';


const routes:Routes = [
  {
    path:'about',component: AboutComponent
  },
  {
    path:'contact',component: ContactComponent
  },
  {
    path:'header',component: HeaderComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
