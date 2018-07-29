import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ServerService {
    constructor( private http: Http ){

    }
    storeServerData (server : any[]) {
        debugger;
        return this.http.post('https://udemy-ng-http-167de.firebaseio.com/data.json',server);
    }
} 