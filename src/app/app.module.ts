import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicAttrDirectiveDirective } from './directive/basic-attr-directive.directive';
import { BetterAttrDirectiveDirective } from './directive/better-attr-directive.directive';
import { UnlessDirective } from './directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicAttrDirectiveDirective,
    BetterAttrDirectiveDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
