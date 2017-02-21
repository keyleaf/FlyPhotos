import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing'

// components
import {AppComponent} from './app.component';
import {PreviewComponent} from './detail/preview.component';
import {DetailComponent} from './detail/detail.component';

//services
import {PhotosService} from './services/photos.service';

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
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
