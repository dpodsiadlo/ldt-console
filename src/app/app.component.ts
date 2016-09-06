import {Component, NgZone, ViewChild, ElementRef} from '@angular/core';
import {LogPackageComponent} from "./components/log-package/log-package.component";
import {LogPackage} from "./services/data";


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [LogPackageComponent]
})
export class AppComponent {

    private port:number = 1800;
    private filter:string = "";
    private filterRE:any = null;
    private maxEntries:number = 10;
    private connected:boolean = false;
    private defaultState:string = "minimized";

    private logChannel:any = null;
    private log:LogPackage[] = [];

    @ViewChild('settings')
    settings:ElementRef = null;

    public constructor(private ng:NgZone) {

        this.logChannel = chrome.runtime.connect({name: "log_channel"});


        this.logChannel.onMessage.addListener((msg:any) => {
            if (msg.command == 'PrintLog')
                this.ng.run(()=> {

                    if (this.filter == "" || (this.filterRE !== null && msg.data.request && this.filterRE.test(msg.data.request.url) || (msg.data.request && msg.data.request.url.indexOf(this.filter) >= 0))) {
                        this.log.unshift(msg.data);

                        if (this.log.length > this.maxEntries) {
                            this.log.splice(this.maxEntries);
                        }
                    }


                });
        });

    }

    public filterChanged(filter:string) {

        if (filter != "") {
            try {
                this.filterRE = new RegExp(filter);

            } catch (err) {
                this.filterRE = null;
            }

        } else {
            this.filterRE = null;
        }

    }

    public isFilterRE():boolean {

        return this.filterRE != null;
    }


    public isConnected():boolean {
        return this.connected;
    }

    public connect() {

        chrome.runtime.sendMessage({command: "SocketStartListening", port: this.port}, (status:boolean) => {
            this.ng.run(()=> {
                this.connected = status;
            });
        });
    }

    public disconnect() {
        chrome.runtime.sendMessage({command: "SocketStopListening"}, (status:boolean) => {
            this.ng.run(()=> {
                this.connected = status;
            });
        });

    }


    public clearLog() {
        this.log = [];
    }


    public showSettings() {
        jQuery(this.settings.nativeElement).modal('show');
    }
}

