var serverSocketId;
var socketId;
var logPort = null;

var buffor = {};


function SocketStartListening(port, callback) {
    chrome.sockets.tcpServer.listen(socketId,
        "127.0.0.1", port, function (resultCode) {
            onListenCallback(socketId, resultCode)

            if (callback) {
                callback();
            }
        });
}

function SocketStopListening(callback) {
    chrome.sockets.tcpServer.disconnect(socketId, function () {
        console.log("Disconnected!");

        if (callback) {
            callback();
        }
    });
}


chrome.runtime.onConnect.addListener(function (port) {
    if (port.name == "log_channel")
        logPort = port;
});


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {


        if (request.command == "SocketStartListening") {
            SocketStartListening(request.port, function () {
                sendResponse(true);
            })
        }


        if (request.command == "SocketStopListening") {
            SocketStopListening(function () {
                sendResponse(false);
            })
        }

        return true;

    });


function onListenCallback(socketId, resultCode) {
    if (resultCode < 0) {
        console.log("Error listening:" +
            chrome.runtime.lastError.message);
        return;
    }

    console.log("Connected!");
    serverSocketId = socketId;
    chrome.sockets.tcpServer.onAccept.addListener(onAccept)
}


function onAccept(info) {


    if (info.socketId != serverSocketId)
        return;

    // A new TCP connection has been established.
    // chrome.sockets.tcp.send(info.clientSocketId, data,
    //     function (resultCode) {
    //         console.log("Data sent to new TCP client connection.")
    //     });
    // Start receiving data.

    buffor[info.clientSocketId] = "";
    chrome.sockets.tcp.setPaused(info.clientSocketId, false);
}


chrome.sockets.tcpServer.create({}, function (createInfo) {
    socketId = createInfo.socketId;
});


chrome.sockets.tcp.onReceive.addListener(function (recvInfo) {


    buffor[recvInfo.socketId] += String.fromCharCode.apply(null, new Uint8Array(recvInfo.data));


});


chrome.sockets.tcp.onReceiveError.addListener(function (info) {


    if (typeof buffor[info.socketId] != "undefined") {
        if (logPort){
            logPort.postMessage({
                command: "PrintLog",
                data: JSON.parse(buffor[info.socketId]),
                socketId: info.socketId
            });
        }

        delete buffor[info.socketId];
    }


});