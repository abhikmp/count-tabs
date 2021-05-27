chrome.storage.local.get(['tabCount'], function(result){
    console.log('value retrived is '+result.tabCount);
    document.body.innerHTML = '<h4>'+result.tabCount+'</h4>';
});

