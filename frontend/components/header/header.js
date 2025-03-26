document.addEventListener('DOMContentLoaded', () => {
    
    fetch('/components/header/header.html')
      .then((response) => response.text())
      .then((html) => {
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
  
        const existingHeader = document.querySelector('.header');
        if (existingHeader) {
          existingHeader.appendChild(tempDiv.firstElementChild);
        }
      })
      .catch((error) => {
        console.error('Error loading new header items:', error);
      });
  });
  