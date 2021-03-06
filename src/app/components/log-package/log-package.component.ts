import {Component, Input} from '@angular/core';
import {LogPackage, LogEntry} from "../../services/data";
import {LogRequestComponent} from "../log-request/log-request.component";
import {LogResponseComponent} from "../log-response/log-response.component";
import {QueryComponent} from "../query/query.component";


@Component({
    selector: 'log-package',
    template: require('./log-package.component.html'),
    styles: [require('./log-package.component.css')],
    directives: [LogRequestComponent, LogResponseComponent, QueryComponent]
})
export class LogPackageComponent {

    @Input('data')
    data:LogPackage = null;


    @Input('defaultState')
    _currentTab:string = '';

    public constructor() {

    }


    public hasRequest():boolean {
        return (typeof this.data != 'undefined') && (typeof this.data.request != 'undefined');
    }

    public hasResponse():boolean {
        return (typeof this.data != 'undefined') && (typeof this.data.response != 'undefined');
    }

    public isCurrentTab(tab:string):boolean {
        return this._currentTab == tab;
    }

    public setCurrentTab(tab:string):void {
        this._currentTab = tab;
    }


    public alertType(entry:LogEntry) {

        let alertClass = "default";

        switch (entry.type) {
            case "Warning":
                alertClass = "warning";
                break;
            case "Error":
                alertClass = "danger";
                break;

        }


        return "alert-" + alertClass;
    }


    ngOnInit() {

    }

}

