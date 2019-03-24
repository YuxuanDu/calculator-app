import { AppErrorHandler } from './errorhandler/app.error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CalulatorComponent } from './calulator/calulator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalulatorComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
