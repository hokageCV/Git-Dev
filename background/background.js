const openInDev = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
        if (currentUrl.startsWith("https://github.com")) {
            const devUrl = currentUrl.replace("github.com", "github.dev");
            chrome.tabs.update({ url: devUrl });
        }
    });
};
// listening for shortcut key
chrome.commands.onCommand.addListener((command) => {
    if (command === "open-git-dev") {
        openInDev();
    }
});

// listening for message from popup
chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.command === "open git in dev") {
        openInDev();
    }
});
