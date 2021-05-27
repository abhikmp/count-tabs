chrome.tabs.onCreated.addListener(function (){
    chrome.tabs.query({ windowType: "normal" }, function (tabs) {
        chrome.storage.local.set({ tabCount: tabs.length }, function () {
            console.log("value is set to" + tabs.length);
        });
    });
});

chrome.tabs.onRemoved.addListener(function (){
    chrome.tabs.query({ windowType: "normal" }, function (tabs) {
    chrome.storage.local.set({ tabCount: tabs.length }, function () {
        console.log("value is set to" + tabs.length);
    });
});
})
