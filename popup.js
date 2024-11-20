document.getElementById('summarize').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "summarize"});
    });
});

document.getElementById('find-related').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "findRelated"});
    });
});

document.getElementById('save-paper').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "save"});
    });
});
