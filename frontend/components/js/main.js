document.addEventListener('DOMContentLoaded', function() {
 
    console.log('Renewable Energy Solutions website loaded');
 
    const subscribeButton = document.querySelector('.newsletter-form button');
    
    subscribeButton.addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('.newsletter-form input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            alert('Thank you for subscribing with: ' + email);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
});