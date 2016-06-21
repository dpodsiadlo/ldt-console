chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('dist/index.html', {
        id: 'main',
        bounds: {
            width: 800,
            height: 600,
            left: 100,
            top: 100
        },
        frame: {
            type: 'chrome'
        }

    });


});