import {Component, Input} from '@angular/core';
import {Query} from "../../services/data";


@Component({
    selector: 'query',
    template: require('./query.component.html'),
    styles: [require('./query.component.css')]
})
export class QueryComponent {

    @Input('data')
    data:Query = null;


    public constructor() {

    }

}

