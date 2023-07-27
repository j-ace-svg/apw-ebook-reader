chrome.storage.local.get("textBookHeight", function(data) {
    console.log(data);
    document.body.style.setProperty('--i-frame-height', `${data.textBookHeight}px`);
});

window.onload = function() {
    chrome.storage.local.set({"recommendationHeight": document.getElementById("content").offsetHeight});
    chrome.storage.local.get("recommendationHeight", function(data) {
        console.log(data);
    });
};

var observer = new ResizeObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.contentBoxSize) {
            console.log("attributes changed");
        }
    });
});

//observer.observe(document.getElementById("content"));

window.addEventListener("resize", function() {
    chrome.storage.local.set({"recommendationHeight": document.getElementById("content").offsetHeight});
    chrome.storage.local.get("recommendationHeight", function(data) {
        console.log(data);
    });
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key === "textBookHeight" && namespace === "local")
        {
            document.body.style.setProperty('--i-frame-height', `${newValue}px`);
        }
    }
});