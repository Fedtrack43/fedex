// Update time in status bar
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    document.querySelector('.time').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Copy tracking number functionality
document.querySelector('.copy-btn').addEventListener('click', function() {
    const trackingNumber = document.querySelector('.number-display').textContent;
    
    // Copy to clipboard
    navigator.clipboard.writeText(trackingNumber).then(() => {
        // Show success feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        this.style.background = 'rgba(40, 167, 69, 0.8)';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        alert('Tracking number copied: ' + trackingNumber);
    });
});

// Back button functionality
document.querySelector('.back-btn').addEventListener('click', function() {
    // Go back to main page
    window.location.href = 'index.html';
});

// Share button functionality
document.querySelector('.header-icons .fa-share').addEventListener('click', function() {
    const trackingNumber = document.querySelector('.number-display').textContent;
    const shareText = `Track my FedEx package: ${trackingNumber}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'FedEx Tracking',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Tracking link copied to clipboard!');
        });
    }
});

// Action button functionality
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.querySelector('span').textContent;
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Show action-specific message
        if (buttonText.includes('Notifications')) {
            alert('You will receive notifications about this package');
        } else if (buttonText.includes('Print')) {
            alert('Printing shipping label...');
        } else if (buttonText.includes('Contact')) {
            alert('Connecting you to FedEx customer support...');
        }
    });
});

// Add loading animation for page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for action buttons
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const actionButtons = document.querySelectorAll('.action-btn');
    const currentIndex = Array.from(actionButtons).findIndex(button => 
        button === document.activeElement
    );
    
    if (e.key === 'ArrowDown' && currentIndex < actionButtons.length - 1) {
        actionButtons[currentIndex + 1].focus();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        actionButtons[currentIndex - 1].focus();
    } else if (e.key === 'Enter' && document.activeElement.classList.contains('action-btn')) {
        document.activeElement.click();
    } else if (e.key === 'Escape') {
        // Go back to main page
        window.location.href = 'index.html';
    }
});

// Make action buttons focusable
document.querySelectorAll('.action-btn').forEach(button => {
    button.setAttribute('tabindex', '0');
});

// Add real-time status updates (simulated)
function updateStatus() {
    const statusBadge = document.querySelector('.status-badge');
    const statuses = ['In Transit', 'Out for Delivery', 'Delivered'];
    const colors = ['#856404', '#155724', '#721c24'];
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % statuses.length;
        statusBadge.textContent = statuses[currentIndex];
        statusBadge.style.background = colors[currentIndex] === '#856404' ? '#fff3cd' : 
                                     colors[currentIndex] === '#155724' ? '#d4edda' : '#f8d7da';
        statusBadge.style.color = colors[currentIndex];
        statusBadge.style.border = `1px solid ${colors[currentIndex] === '#856404' ? '#ffeaa7' : 
                                              colors[currentIndex] === '#155724' ? '#c3e6cb' : '#f5c6cb'}`;
    }, 10000); // Update every 10 seconds
}

// Start status updates after 5 seconds
setTimeout(updateStatus, 5000);

// Add swipe gesture for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - go back
            window.location.href = 'index.html';
        }
    }
} 