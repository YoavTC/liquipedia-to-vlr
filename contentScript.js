window.addEventListener('load', function() {
    // Find the match link on the Liquipedia page
    var matches = document.querySelectorAll('a[href*="vlr.gg"] img');
    var lastMatch = matches[matches.length - 1];
    //var matchLink = document.querySelector('a[href*="vlr.gg"] img'); // Select the link containing

    //Set match URL
    if (lastMatch) {
        var matchUrl = lastMatch.parentNode.href;
        chrome.runtime.sendMessage({ action: 'setMatchURL', URL: matchUrl });
    }
});