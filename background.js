var matchURL;

// Listen for messages from the popup script or content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //Updates the tournament URL
    if (message.action === 'setMatchURL') {
        matchURL = message.URL;
    }
    if (message.action === 'goToMatch') {
        chrome.tabs.create({ url: matchURL });
    }
    if (message.action === 'goToTourney') {
        let tourneyURL = message.URL;
        chrome.tabs.create({ url: tourneyURL });
    }
});