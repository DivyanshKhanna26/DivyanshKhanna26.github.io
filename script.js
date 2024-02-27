function resizeIframe() {
    var iframe = document.getElementById('profile-summary-frame');
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
    iframe.style.height = doc.body.scrollHeight + 32 + 'px'; // Add a small buffer (10 pixels) to ensure all content is displayed

    var iframe = document.getElementById('work-expereince-frame');
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
    iframe.style.height = doc.body.scrollHeight + 35 + 'px'; // Add a small buffer (10 pixels) to ensure all content is displayed
    
    var iframe = document.getElementById('project-frame');
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
    iframe.style.height = doc.body.scrollHeight + 35 + 'px'; // Add a small buffer (10 pixels) to ensure all content is displayed
}


// Resize the iframe when the content is loaded
window.onload = resizeIframe;
