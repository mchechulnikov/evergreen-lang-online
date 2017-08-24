import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {EditorComponent} from './editor/editor.component';
import {HelpComponent} from './help/help.component';
import {OutputComponent} from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditorComponent,
    HelpComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
