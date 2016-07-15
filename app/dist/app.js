webpackJsonp([0],{0:function(e,t,n){"use strict";var a=n(1),s=n(7),r=n(280);s.enableProdMode(),a.bootstrap(r.AppComponent,[])},280:function(e,t,n){"use strict";var a=this&&this.__decorate||function(e,t,n,a){var s,r=arguments.length,o=3>r?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(o=(3>r?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=n(7),o=n(281),i=function(){function e(e){var t=this;this.ng=e,this.port=1800,this.maxEntries=10,this.connected=!1,this.defaultState="minimized",this.logChannel=null,this.log=[],this.settings=null,this.logChannel=chrome.runtime.connect({name:"log_channel"}),this.logChannel.onMessage.addListener(function(e){"PrintLog"==e.command&&t.ng.run(function(){t.log.unshift(e.data),t.log.length>t.maxEntries&&t.log.splice(t.maxEntries)})})}return e.prototype.isConnected=function(){return this.connected},e.prototype.connect=function(){var e=this;chrome.runtime.sendMessage({command:"SocketStartListening",port:this.port},function(t){e.ng.run(function(){e.connected=t})})},e.prototype.disconnect=function(){var e=this;chrome.runtime.sendMessage({command:"SocketStopListening"},function(t){e.ng.run(function(){e.connected=t})})},e.prototype.clearLog=function(){this.log=[]},e.prototype.showSettings=function(){jQuery(this.settings.nativeElement).modal("show")},a([r.ViewChild("settings"),s("design:type",r.ElementRef)],e.prototype,"settings",void 0),e=a([r.Component({selector:"my-app",template:n(293),styles:[n(294)],directives:[o.LogPackageComponent]}),s("design:paramtypes",[r.NgZone])],e)}();t.AppComponent=i},281:function(e,t,n){"use strict";var a=this&&this.__decorate||function(e,t,n,a){var s,r=arguments.length,o=3>r?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(o=(3>r?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=n(7),o=n(282),i=n(285),l=n(288),d=function(){function e(){this.data=null,this._currentTab=""}return e.prototype.hasRequest=function(){return"undefined"!=typeof this.data&&"undefined"!=typeof this.data.request},e.prototype.hasResponse=function(){return"undefined"!=typeof this.data&&"undefined"!=typeof this.data.response},e.prototype.isCurrentTab=function(e){return this._currentTab==e},e.prototype.setCurrentTab=function(e){this._currentTab=e},e.prototype.alertType=function(e){var t="default";switch(e.type){case"Warning":t="warning";break;case"Error":t="danger"}return"alert-"+t},e.prototype.ngOnInit=function(){},a([r.Input("data"),s("design:type",Object)],e.prototype,"data",void 0),a([r.Input("defaultState"),s("design:type",String)],e.prototype,"_currentTab",void 0),e=a([r.Component({selector:"log-package",template:n(291),styles:[n(292)],directives:[o.LogRequestComponent,i.LogResponseComponent,l.QueryComponent]}),s("design:paramtypes",[])],e)}();t.LogPackageComponent=d},282:function(e,t,n){"use strict";var a=this&&this.__decorate||function(e,t,n,a){var s,r=arguments.length,o=3>r?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(o=(3>r?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=n(7),o=function(){function e(){this.data=null,this._currentTab="params"}return e.prototype.isExpanded=function(e){return e==this._currentTab},e.prototype.expandTab=function(e){this._currentTab=this._currentTab!=e?e:"params"==e?"headers":"params"},e.prototype.getHeaders=function(){var e=[];for(var t in this.data.headers)e.push({name:t,value:this.data.headers[t].join("; ")});return e},e.prototype.listParams=function(e,t,n){for(var a in t)t[a]instanceof Object||t[a]instanceof Array?(e.push({name:a,indent:n,value:Object.prototype.toString.call(t[a])}),this.listParams(e,t[a],n+1)):e.push({name:a,indent:n,value:t[a]})},e.prototype.getParams=function(){var e=[];return this.listParams(e,this.data.parameters,0),e},e.prototype.hasHeaders=function(){return"undefined"!=typeof this.data&&this.data.headers instanceof Object&&Object.keys(this.data.headers).length>0},e.prototype.headersCount=function(){return"undefined"!=typeof this.data&&this.data.headers instanceof Object?Object.keys(this.data.headers).length:0},e.prototype.hasParams=function(){return"undefined"!=typeof this.data&&this.data.parameters instanceof Object&&Object.keys(this.data.parameters).length>0},e.prototype.paramsCount=function(){return"undefined"!=typeof this.data&&this.data.parameters instanceof Object?Object.keys(this.data.parameters).length:0},a([r.Input("data"),s("design:type",Object)],e.prototype,"data",void 0),e=a([r.Component({selector:"log-request",template:n(283),styles:[n(284)]}),s("design:paramtypes",[])],e)}();t.LogRequestComponent=o},283:function(e,t){e.exports='<div class="panel panel-default small" role="tablist" aria-multiselectable="true">\n    <div class="panel-heading" role="tab">\n        <a role="button" data-toggle="collapse" [attr.aria-expanded]="isExpanded(\'headers\')?\'true\':\'false\'"\n           (click)="expandTab(\'headers\')">\n            Headers\n\n        </a>\n        <span class="badge pull-right">{{headersCount()}}</span>\n    </div>\n    <div class="panel-collapse collapse" [class.in]="isExpanded(\'headers\')" role="tabpanel">\n        <div class="panel-body">\n            <table class="table" *ngIf="hasHeaders()">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Value</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor="let header of getHeaders();let i = index">\n                    <td class="selectable">{{header.name}}</td>\n                    <td class="selectable">{{header.value}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class="panel-heading" role="tab">\n        <a role="button" data-toggle="collapse" [attr.aria-expanded]="isExpanded(\'params\')?\'true\':\'false\'"\n           (click)="expandTab(\'params\')">\n            Parameters\n        </a>\n        <span class="badge pull-right">{{paramsCount()}}</span>\n    </div>\n    <div class="panel-collapse collapse" [class.in]="isExpanded(\'params\')" role="tabpanel">\n        <div class="panel-body">\n            <table class="table" *ngIf="hasParams()">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Value</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor="let param of getParams();let i = index">\n                    <td class="selectable"><span class="indent" [style.width.em]="param.indent"></span>{{param.name}}</td>\n                    <td class="selectable">{{param.value}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>\n\n'},284:function(e,t){e.exports="span.indent {\n    display: inline-block;\n    width: 2em;\n}\n\n.selectable {\n    cursor: text;\n    -webkit-user-select: text;\n}"},285:function(e,t,n){"use strict";var a=this&&this.__decorate||function(e,t,n,a){var s,r=arguments.length,o=3>r?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(o=(3>r?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=n(7),o=function(){function e(){this.data=null,this._currentTab="body"}return e.prototype.isExpanded=function(e){return e==this._currentTab},e.prototype.expandTab=function(e){this._currentTab=this._currentTab!=e?e:"params"==e?"headers":"params"},e.prototype.getHeaders=function(){var e=[];for(var t in this.data.headers)e.push({name:t,value:this.data.headers[t].join("; ")});return e},e.prototype.getContentType=function(){if("undefined"!=typeof this.data&&this.data.headers instanceof Object&&this.data.headers["content-type"]instanceof Array&&this.data.headers["content-type"].length>0){var e=this.data.headers["content-type"][0],t=e.indexOf(";");return t>=0&&(e=e.substring(0,t)),e}return null},e.prototype.isJSON=function(){return"application/json"==this.getContentType()},e.prototype.isHTML=function(){return"text/html"==this.getContentType()},e.prototype.getJSONBody=function(){return JSON.stringify(JSON.parse(this.data.body),void 0,2)},e.prototype.getBody=function(){return this.isJSON()?this.getJSONBody():this.data.body},e.prototype.hasHeaders=function(){return"undefined"!=typeof this.data&&this.data.headers instanceof Object&&Object.keys(this.data.headers).length>0},e.prototype.headersCount=function(){return"undefined"!=typeof this.data&&this.data.headers instanceof Object?Object.keys(this.data.headers).length:0},a([r.Input("data"),s("design:type",Object)],e.prototype,"data",void 0),e=a([r.Component({selector:"log-response",template:n(286),styles:[n(287)]}),s("design:paramtypes",[])],e)}();t.LogResponseComponent=o},286:function(e,t){e.exports='<div class="panel panel-default small" role="tablist" aria-multiselectable="true">\n    <div class="panel-heading" role="tab">\n        <a role="button" data-toggle="collapse" [attr.aria-expanded]="isExpanded(\'headers\')?\'true\':\'false\'"\n           (click)="expandTab(\'headers\')">\n            Headers\n\n        </a>\n        <span class="badge pull-right">{{headersCount()}}</span>\n    </div>\n    <div class="panel-collapse collapse" [class.in]="isExpanded(\'headers\')" role="tabpanel">\n        <div class="panel-body">\n            <table class="table" *ngIf="hasHeaders()">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Value</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor="let header of getHeaders();let i = index">\n                    <td class="selectable">{{header.name}}</td>\n                    <td class="selectable">{{header.value}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class="panel-heading" role="tab">\n        <a role="button" data-toggle="collapse" [attr.aria-expanded]="isExpanded(\'body\')?\'true\':\'false\'"\n           (click)="expandTab(\'body\')">\n            Body\n        </a>\n        <span class="label label-default pull-right">{{getContentType()}}</span>\n    </div>\n    <div class="panel-collapse collapse" [class.in]="isExpanded(\'body\')" role="tabpanel">\n        <div class="panel-body">\n            <pre>{{getBody()}}</pre>\n        </div>\n    </div>\n\n</div>\n\n'},287:function(e,t){e.exports="pre{\n    cursor: text;\n    -webkit-user-select: text;\n}\n\n\n.selectable {\n    cursor: text;\n    -webkit-user-select: text;\n}"},288:function(e,t,n){"use strict";var a=this&&this.__decorate||function(e,t,n,a){var s,r=arguments.length,o=3>r?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(o=(3>r?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},r=n(7),o=function(){function e(){this.data=null}return a([r.Input("data"),s("design:type",Object)],e.prototype,"data",void 0),e=a([r.Component({selector:"query",template:n(289),styles:[n(290)]}),s("design:paramtypes",[])],e)}();t.QueryComponent=o},289:function(e,t){e.exports='<div class="panel panel-default small">\n    <div class="panel-heading">\n\n    </div>\n    <div class="panel-body">\n        <pre>{{data.sql}}</pre>\n        <table class="table">\n            <thead>\n            <tr>\n                <th>Binding ID</th>\n                <th>Value</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor="let binding of data.bindings;let i = index">\n                <td class="selectable">{{i}}</td>\n                <td class="selectable">{{binding}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n'},290:function(e,t){e.exports="pre{\n    cursor: text;\n    -webkit-user-select: text;\n}\n\n\n\n.selectable {\n    cursor: text;\n    -webkit-user-select: text;\n}"},291:function(e,t){e.exports='<div class="panel panel-default">\n    <div class="panel panel-default">\n        <div class="panel-heading">\n            <ul class="nav nav-tabs" role="tablist">\n                <li *ngIf="hasRequest()"><a><span\n                        class="badge">{{data.request.method}}</span>\n                    <strong>{{data.request.url}}</strong></a></li>\n                <li *ngIf="!hasRequest()"><a><span class="badge">{{data.php.sapi}}</span>\n                </a>\n                </li>\n                <li role="presentation" class="pull-right" [class.active]="isCurrentTab(\'queries\')"><a\n                        href="javascript:void(null)" (click)="setCurrentTab(\'queries\')" role="tab"\n                        data-toggle="tab">Queries <span\n                        class="badge">{{data.queries.length}}</span></a></li>\n\n                <li role="presentation" class="pull-right" [class.active]="isCurrentTab(\'entries\')"><a\n                        href="javascript:void(null)" (click)="setCurrentTab(\'entries\')" role="tab"\n                        data-toggle="tab">Entries <span\n                        class="badge">{{data.entries.length}}</span></a></li>\n\n                <li *ngIf="hasResponse()" class="pull-right" role="presentation"\n                    [class.active]="isCurrentTab(\'response\')"><a\n                        href="javascript:void(null)" (click)="setCurrentTab(\'response\')" role="tab" data-toggle="tab">Response\n                    <span class="badge">{{data.response.status}}</span></a>\n\n                </li>\n\n                <li *ngIf="hasRequest()" class="pull-right" role="presentation"\n                    [class.active]="isCurrentTab(\'request\')"><a\n                        href="javascript:void(null)" (click)="setCurrentTab(\'request\')" role="tab"\n                        data-toggle="tab">Request</a></li>\n\n\n            </ul>\n        </div>\n        <div class="tab-content">\n            <div *ngIf="hasRequest()" role="tabpanel" class="tab-pane" [class.active]="isCurrentTab(\'request\')">\n                <log-request [data]="data.request"></log-request>\n            </div>\n            <div *ngIf="hasResponse()" role="tabpanel" class="tab-pane" [class.active]="isCurrentTab(\'response\')">\n                <log-response [data]="data.response"></log-response>\n            </div>\n            <div role="tabpanel" class="tab-pane" [class.active]="isCurrentTab(\'entries\')">\n                <div *ngFor="let entry of data.entries" class="alert {{alertType(entry)}} no-margin no-border"\n                     role="alert">{{entry.message}}\n                </div>\n            </div>\n\n            <div role="tabpanel" class="tab-pane" [class.active]="isCurrentTab(\'queries\')">\n                <query *ngFor="let query of data.queries"  [data]="query"></query>\n            </div>\n        </div>\n    </div>\n</div>'},292:function(e,t){e.exports="pre{\n    -webkit-user-select: text;\n}"},293:function(e,t){e.exports='<nav class="navbar navbar-inverse navbar-fixed-top small">\n    <div class="container">\n        <div class="navbar-header">\n            <ul class="nav navbar-nav">\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\n                       aria-expanded="false">LDT Console <span class="caret"></span></a>\n                    <ul class="dropdown-menu">\n                        <li><a href="javascript:void(null)" (click)="showSettings()">Settings</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n        <div id="navbar" class="navbar-collapse collapse">\n            <form class="navbar-form navbar-right">\n                <div class="form-group form-group-sm">\n                    <div class="input-group input-group-sm">\n                        <div *ngIf="!isConnected()" class="input-group-addon">\n                            <span>Port:</span>\n                        </div>\n                        <input *ngIf="!isConnected()" type="number" placeholder="Port" [(ngModel)]="port"\n                               class="form-control">\n                        <div class="input-group-btn">\n                            <button *ngIf="!isConnected()" (click)="connect()" type="button"\n                                    class="btn btn-success">Start\n                            </button>\n                            <button *ngIf="isConnected()" (click)="disconnect()" type="button"\n                                    class="btn btn-danger">\n                                Stop\n                            </button>\n                            <button (click)="clearLog()" type="button" class="btn btn-danger">\n                                Clear\n                            </button>\n                        </div>\n                    </div>\n\n                </div>\n\n            </form>\n        </div>\n    </div>\n</nav>\n\n<div id="contents">\n    <log-package *ngFor="let msg of log" [data]="msg" [defaultState]="defaultState"></log-package>\n</div>\n\n\n<div #settings class="modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog modal-lg">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n                        aria-hidden="true">&times;</span></button>\n                <h4 class="modal-title" id="gridSystemModalLabel">Settings</h4>\n            </div>\n            <div class="modal-body">\n                <div class="row">\n                    <label>Max entries</label>\n                    <input type="number" placeholder="Max entries" [(ngModel)]="maxEntries"\n                           class="form-control text-right">\n\n                </div>\n                <div class="row">\n\n                    <label>Port</label>\n                    <input type="number" placeholder="Port" [(ngModel)]="port"\n                           class="form-control text-right">\n\n                </div>\n                <div class="row">\n\n                    <label>Default state</label>\n                    <select [(ngModel)]="defaultState" class="form-control text-right">\n                        <option value="minimized">Minimized</option>\n                        <option value="request">Request</option>\n                        <option value="response">Response</option>\n                        <option value="entries">Entries</option>\n                        <option value="queries">Queries</option>\n                    </select>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n'},294:function(e,t){e.exports="\nmain {\n    display: block;\n}\n"}});
//# sourceMappingURL=app.js.map