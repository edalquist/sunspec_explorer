import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SunspecDeviceComponent } from './sunspec-device/sunspec-device.component';
import { SunspecModelComponent } from './sunspec-model/sunspec-model.component';
import { SunspecGroupComponent } from './sunspec-group/sunspec-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SunspecDeviceComponent,
    SunspecModelComponent,
    SunspecGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
