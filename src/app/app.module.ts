import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Test1Component } from './pages/test1/test1.component';
import { Test2Component } from './pages/test1/test2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, Test1Component, Test2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
