/**
 * Created by mostafa_carriage on 7/7/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderCountService {

    constructor (
        private http: Http
    ) {}

    getNumber() {
        return this.http.get(`http://localhost:3000/get_order_count`)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
