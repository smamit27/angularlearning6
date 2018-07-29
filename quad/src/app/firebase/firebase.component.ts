import { Component } from '@angular/core';
import {ServerService} from '../services/server.service';

@Component({
    selector:'app-firebase',
    templateUrl: './firebase.component.html',
    styleUrls: ['./firebase.component.css']
})

export class FirebaseComponent {
    servers = [ {
        firstname: 'amit',
        lastname : 'singh'
    },{
    firstname: 'sweta',
    lastname : 'singh'}]
    constructor( private services : ServerService) {

    }

    onAddition () {
        debugger;
        this.services.storeServerData(this.servers).subscribe(
            (response) => {
                debugger;

                console.log(response)
            },
            (error) => {
                debugger;
                    console.log(error)}
        );
    }

}