import { Component } from '@angular/core';
import { OrderCountService } from './order_count.service';

@Component({
  selector: 'hello-angular',
  template: `<h1>{{number}}</h1>`
})
export class AppComponent {
  number = {};
  constructor(orderCountService: OrderCountService) {
    orderCountService.getNumber().subscribe(
        body => this.number = body.number);
    //this.number = orderCountService.getNumber();
  }
}
