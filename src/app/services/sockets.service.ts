export class SocketsService {

    private serverSocketId:number;
    private socketId:number;


    private buffor:string[] = [];

    constructor() {
        
        chrome.sockets.tcpServer.create({}, (createInfo) => {
                this.socketId = createInfo.socketId;
            }
        );

        chrome.sockets.tcp.onReceive.addListener((recvInfo) => {
                this.buffor[recvInfo.socketId] += String.fromCharCode.apply(null, new Uint8Array(recvInfo.data));
            }
        );


        chrome.sockets.tcp.onReceiveError.addListener((info) => {
                if (typeof this.buffor[info.socketId] != "undefined") {

                    //JSON.parse(buffor[info.socketId]), info.socketId

                    delete this.buffor[info.socketId];
                }
            }
        );

    }

    public startListening(port:number, callback:()=>void) {
        chrome.sockets.tcpServer.listen(this.socketId,
            "127.0.0.1", port, (resultCode) => {
                this.onListenCallback(this.socketId, resultCode);

                if (callback) {
                    callback();
                }
            });
    }


    public stopListening(callback:()=>void) {
        chrome.sockets.tcpServer.disconnect(this.socketId, () => {
            console.log("Disconnected!");
            if (callback) {
                callback();
            }
        });
    }


    private onListenCallback(socketId:number, resultCode:number) {
        if (resultCode < 0) {
            console.log("Error listening:");// + chrome.runtime.lastError.message);
            return;
        }

        console.log("Connected!");
        this.serverSocketId = socketId;
        chrome.sockets.tcpServer.onAccept.addListener((info)=> {
            this.onAccept(info);
        });
    }


    private onAccept(info:any) {

        if (info.socketId != this.serverSocketId)
            return;

        this.buffor[info.clientSocketId] = "";

        chrome.sockets.tcp.setPaused(info.clientSocketId, false);
    }


}

