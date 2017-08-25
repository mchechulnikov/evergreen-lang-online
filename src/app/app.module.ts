import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaterialModule} from '@angular-mdc/web';
import {HeaderComponent} from './header/header.component';
import {EditorComponent} from './editor/editor.component';
import {OutputComponent} from './output/output.component';
import {ControlsComponent} from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditorComponent,
    OutputComponent,
    ControlsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
