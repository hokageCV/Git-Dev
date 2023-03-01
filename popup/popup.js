console.log("popup is running");

const gitDevBtn = document.getElementById("git-dev-btn");
gitDevBtn.addEventListener("click", () => {
    const message = { command: "open git in dev" };

    chrome.runtime.sendMessage(message);
});
