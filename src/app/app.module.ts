import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultDetectionComponent } from './default-detection/default-detection.component';
import { OnpushDetectionComponent } from './onpush-detection/onpush-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultDetectionComponent,
    OnpushDetectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
