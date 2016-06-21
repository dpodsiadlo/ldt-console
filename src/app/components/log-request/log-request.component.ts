import {Component, Input} from '@angular/core';
import {LogRequest} from "../../services/data";


@Component({
    selector: 'log-request',
    template: require('./log-request.component.html'),
    styles: []
})
export class LogRequestComponent {

    @Input('data')
    data:LogRequest = null;

    private _currentTab:string = 'params';

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


    public getParams():any[] {

        let res:any[] = [];

        for (let p in this.data.parameters) {
            res.push({
                name: p,
                value: this.data.parameters[p]
            });
        }


        return res;
    }

    public hasHeaders():boolean {
        return (typeof this.data != 'undefined') && (this.data.headers instanceof Object) && (Object.keys(this.data.headers).length > 0);
    }

    public headersCount():number {
        if ((typeof this.data != 'undefined') && (this.data.headers instanceof Object))
            return Object.keys(this.data.headers).length;

        return 0;
    }

    public hasParams():boolean {
        return (typeof this.data != 'undefined') && (this.data.parameters instanceof Object) && (Object.keys(this.data.parameters).length > 0);
    }


    public paramsCount():number {
        if ((typeof this.data != 'undefined') && (this.data.parameters instanceof Object))
            return Object.keys(this.data.parameters).length;

        return 0;
    }

}

