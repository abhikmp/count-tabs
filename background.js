//let count = 0
// chrome.tabs.query({ windowType: "normal" }, function (tabs) {
//      count = tabs.length;
//      console.log("count = " + count);
//      chrome.storage.local.set({ tabCount: count }, function () {
//          console.log("value is set to" + count);
//      });
//  });

// chrome.browserAction.onClicked.addListener((tabs) => {
//     chrome.tabs.executeScript(null, { file: "background.js" })
// });

chrome.tabs.onCreated.addListener(function (){
    chrome.tabs.query({ windowType: "normal" }, function (tabs) {
        //count = tabs.length;
        //console.log("count = " + count);
        chrome.storage.local.set({ tabCount: tabs.length }, function () {
            console.log("value is set to" + tabs.length);
        });
    });
});

chrome.tabs.onRemoved.addListener(function (){
    chrome.tabs.query({ windowType: "normal" }, function (tabs) {
    //count = tabs.length;
    //console.log("count = " + count);
    chrome.storage.local.set({ tabCount: tabs.length }, function () {
        console.log("value is set to" + tabs.length);
    });
});
})