import {Component, Input} from '@angular/core';
import {LogResponse} from "../../services/data";


@Component({
    selector: 'log-response',
    template: require('./log-response.component.html'),
    styles: [require('./log-response.component.css')]
})
export class LogResponseComponent {

    @Input('data')
    data:LogResponse = null;

    private _currentTab:string = 'body';

    public constructor() {

    }

    public isExpanded(tab:string) {
        return tab == this._currentTab;
    }

    public expandTab(tab:string) {
        this._currentTab = this._currentTab != tab ? tab : (tab == 'params' ? 'headers' : 'params');
    }


    public getHeaders():any[] {

        let res:any[] = [];

        for (let h in this.data.headers) {
            res.push({
                name: h,
                value: this.data.headers[h].join("; ")
            });
        }


        return res;
    }

    public getContentType():string {
        
        if ((typeof this.data != 'undefined') && (this.data.headers instanceof Object) && (this.data.headers['content-type'] instanceof Array) && (this.data.headers['content-type'].length > 0)) {

            let cType = this.data.headers['content-type'][0];

            let a = cType.indexOf(';');

            if (a >= 0) {
                cType = cType.substring(0, a);
            }


            return cType;

        }

        return null;
    }

    public isJSON():boolean {
        return 'application/json' == this.getContentType();
    }

    public isHTML():boolean {
        return 'text/html' == this.getContentType();
    }

    public getJSONBody():string {
        return JSON.stringify(JSON.parse(this.data.body), undefined, 2);
    }


    public getBody():string {
        if (this.isJSON())
            return this.getJSONBody();

        return this.data.body;
    }


    public hasHeaders():boolean {
        return (typeof this.data != 'undefined') && (this.data.headers instanceof Object) && (Object.keys(this.data.headers).length > 0);
    }

    public headersCount():number {
        if ((typeof this.data != 'undefined') && (this.data.headers instanceof Object))
            return Object.keys(this.data.headers).length;

        return 0;
    }


}

