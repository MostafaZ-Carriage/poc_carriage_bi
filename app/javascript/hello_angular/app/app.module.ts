import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Ng2CableModule } from 'ng2-cable';
import { AppComponent } from './app.component';
import { OrderCountService } from './order_count.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Ng2CableModule,
    BrowserModule,
    HttpModule, JsonpModule
  ],
  providers: [OrderCountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

