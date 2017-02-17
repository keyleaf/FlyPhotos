import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing'

import {AppComponent} from './app.component';
import {PreviewComponent} from './detail/preview.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
