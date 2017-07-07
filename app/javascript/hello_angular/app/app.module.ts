import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderCountService } from './order_count.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule
  ],
  providers: [OrderCountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

