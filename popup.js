document.getElementById('moveToVLR').addEventListener('click', function() {
   
    console.log('Button clicked');
    // Trigger the functionality to move to the tournament page
    chrome.runtime.sendMessage({ action: 'goToMatch' });
});