var iframe = document.getElementById('grpe-fra');
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
var divMenu = iframeDoc.getElementById('divMenu');

// Check if the divMenu exists before attempting to hide it
if (divMenu) {
    divMenu.style.display = 'none';
} else {
    console.error('divMenu not found in the iframe.');
}
