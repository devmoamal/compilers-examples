function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const textToCopy = codeElement.textContent;
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => showSuccessMessage())
        .catch(err => console.error('Failed to copy: ', err));
}

function showSuccessMessage() {
    const message = document.getElementById('success-message');
    message.classList.add('show');
    
    setTimeout(() => {
        message.classList.remove('show');
    }, 2000);
}