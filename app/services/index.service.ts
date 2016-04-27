import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http'
import { Observable } from 'rxjs/Rx';

export class List {
    constructor(public initialValue: number) {}
}

@Injectable()
export class IndexService {
   
    constructor(private _http: Http) { }

    getData() {
        return this._http.get('data/data.json')
            .map((response: Response) => response.json())
            .do(data => console.log('data', data))
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        //return Observable.throw(error.json().error || 'Server error');
        return Observable.throw('Server error');
    }
    
}
