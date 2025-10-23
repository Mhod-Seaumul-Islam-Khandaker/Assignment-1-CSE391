// JavaScript to display page location and last modification date
window.addEventListener('DOMContentLoaded', function() {
    // Create a div at the bottom of the body
    const infoDiv = document.createElement('div');
    infoDiv.id = 'page-info';
    infoDiv.style.textAlign = 'center';
    infoDiv.style.marginTop = '40px';
    infoDiv.style.padding = '12px';
    infoDiv.style.fontSize = '13px';
    infoDiv.style.color = 'var(--text-secondary)';
    infoDiv.style.borderTop = '1px solid #444';

    // Get page location and last modified date
    const pageLocation = window.location.href;
    const lastModified = document.lastModified;

    // Insert content into the div
    infoDiv.innerHTML = `Page location: ${pageLocation}<br>Last modified: ${lastModified}`;

    // Append the div to the body
    document.body.appendChild(infoDiv);
});
