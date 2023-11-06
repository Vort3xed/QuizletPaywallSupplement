// popup.js
document.getElementById("removeDivButton").addEventListener("click", () => {
    console.log("Button clicked");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Sending message");
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "removeDiv" });
    });
  });

  document.getElementById("startScrollDown").addEventListener("click", () => {
  // Send a message to content script to start scrolling down
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "startScrollDown" });
  });
});

document.getElementById("startScrollUp").addEventListener("click", () => {
  // Send a message to content script to start scrolling up
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "startScrollUp" });
  });
});