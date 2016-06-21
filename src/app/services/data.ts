export interface LogPackage {

    request:LogRequest;
    response:any;
    entries:LogEntry[];
    php:any;
}

export interface LogRequest {
    clientIps:string[];
    cookies:any;
    headers:any;
    httpVersion:string;
    method:string;
    parameters:any;
    url:string;
}

export interface LogResponse {
    headers:any;
    body:any;
}


export interface LogEntry {
    message:string;
    trace:any[];
    type:string;
}