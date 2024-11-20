chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "summarize") {
        const title = document.querySelector("h1")?.innerText || "No title found";
        const abstract = document.querySelector("abstract")?.innerText || "No abstract found";
        sendResponse({title, abstract});
    }
});
