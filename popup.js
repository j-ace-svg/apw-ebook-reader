function saveHeight() {
    //chrome.storage.local.set({"autoHeight": document.getElementById("auto-height").checked});
    chrome.storage.local.set({"textBookHeight": document.getElementById("frame-height").value});
    console.log("saving");
}

function applyHeight(tab) {
    chrome.storage.local.get("textBookHeight", function(data){
        document.getElementById("current-height-notice").innerText = data.textBookHeight;
        console.log(JSON.stringify(data));
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tab.id, data);
        });
    });
    /*chrome.storage.local.get("autoHeight", function(data){
        console.log(JSON.stringify(data));
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tab.id, data);
        });
    });*/
}

window.onload = function() {
    try {
        chrome.storage.local.get("textBookHeight", function(data){
            document.getElementById("current-height-notice").innerText = data.textBookHeight;
            console.log(data);
        });
    } catch {
        chrome.storage.local.set({"textBookHeight": "878"});
        chrome.storage.local.get("textBookHeight", function(data){
            document.getElementById("current-height-notice").innerText = data.textBookHeight;
            console.log(data);
        });
    }
    try {
        chrome.storage.local.get("recommendationHeight", function(data){
            document.getElementById("recommended-height-notice").innerText = data.recommendationHeight;
            console.log(data);
        });
    } catch {
        chrome.storage.local.set({"recommendationHeight": "600"});
        chrome.storage.local.get("recommendationHeight", function(data){
            document.getElementById("recommended-height-notice").innerText = data.recommendationHeight;
            console.log(data);
        });
    }
    /*try {
        chrome.storage.local.get("autoHeight", function(data){
            document.getElementById("auto-height").checked = data.autoHeight;
            console.log(data);
        });
    } catch {
        chrome.storage.local.set({"autoHeight": true});
        chrome.storage.local.get("autoHeight", function(data){
            document.getElementById("auto-height").checked = data.autoHeight;
            console.log(data);
        });
    }*/
    document.getElementById("apply").addEventListener("click", saveHeight);
    document.getElementById("apply").addEventListener("click", applyHeight);
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key === "recommendationHeight" && namespace === "local")
        {
            document.getElementById("recommended-height-notice").innerText = newValue;
            console.log(data);
        }
    }
});