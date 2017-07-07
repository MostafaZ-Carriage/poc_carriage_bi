import { Component } from '@angular/core';
import { OrderCountService } from './order_count.service';
import { Ng2Cable, Broadcaster } from 'ng2-cable';

@Component({
  selector: 'hello-angular',
  template: `<h1>{{number}}</h1>`
})
export class AppComponent {
  number = {};
  constructor(orderCountService: OrderCountService,private ng2cable: Ng2Cable, private broadcaster: Broadcaster) {
    this.ng2cable.subscribe('ws://localhost:3000/cable', 'OrderCountChannel');
    //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

    this.broadcaster.on<string>('OrderCountChannel').subscribe(
        message => {
          this.number = message['number'];
        }
    );
    orderCountService.getNumber().subscribe(
        body => this.number = body.number);
    //this.number = orderCountService.getNumber();
  }
}
