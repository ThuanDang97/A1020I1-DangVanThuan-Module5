import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ImgSliderModule} from "./img-slider/img-slider.module";
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from "./image-gallery/token";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImgSliderModule,
    ImageGalleryModule
  ],
  providers: [{provide: AuthService, useClass: AuthService},
    {provide: 'API_ENDPOINT', useValue: 'http://api.example.com'},
    {provide: 'API_URL', useExisting: 'API_ENDPOINT'},
    {
      provide: 'some-token',
      useFactory: function() {
        return Math.random();
      }
    },
    // {provide: 'API_URL', useValue: 'abc.com'},
    // {provide: 'API_URL', useExisting: 'api.com'}
    {provide: GalleryConfig, useValue: 2}],
  bootstrap: [AppComponent]
})
export class AppModule { }
