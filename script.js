// Update time in status bar (only if time element exists)
function updateTime() {
    const timeElement = document.querySelector('.time');
    if (timeElement) {
        const now = new Date();
        const utahTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Denver"}));
        const timeString = utahTime.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
        timeElement.textContent = timeString;
    }
}

// Update time every second (only if time element exists)
const timeElement = document.querySelector('.time');
if (timeElement) {
    setInterval(updateTime, 1000);
    updateTime(); // Initial call
}

// Tracking form functionality
document.getElementById('trackButton').addEventListener('click', function() {
    const trackingId = document.getElementById('trackingId').value.trim();
    
    if (trackingId) {
        // Show loading state
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>TRACKING...</span>';
        
        // Simulate API call delay
        setTimeout(() => {
            // Redirect to tracking results page
            window.location.href = 'tracking.html';
        }, 2000);
    } else {
        alert('Please enter a tracking number');
    }
});

// Enter key support for tracking input
document.getElementById('trackingId').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('trackButton').click();
    }
});

// Action item functionality
document.querySelectorAll('.action-item').forEach(item => {
    item.addEventListener('click', function() {
        const actionText = this.querySelector('span').textContent;
        console.log(`Action clicked: ${actionText}`);
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Show action-specific message
        if (actionText.includes('STORE HOURS')) {
            alert('Find FedEx store locations and their operating hours');
        } else if (actionText.includes('SERVICE ALERTS')) {
            alert('Check for any service disruptions or delays');
        } else if (actionText.includes('RETURN A PACKAGE')) {
            alert('Start the process to return a package');
        }
    });
});

// Header icon functionality (only if elements exist)
const userIcon = document.querySelector('.header-icons .fa-user');
if (userIcon) {
    userIcon.addEventListener('click', function() {
        alert('User profile clicked');
    });
}

const menuIcon = document.querySelector('.header-icons .fa-bars');
if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        alert('Menu clicked');
    });
}

// Add loading animation for page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for action items
document.querySelectorAll('.action-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const actionItems = document.querySelectorAll('.action-item');
    const currentIndex = Array.from(actionItems).findIndex(item => 
        item === document.activeElement
    );
    
    if (e.key === 'ArrowDown' && currentIndex < actionItems.length - 1) {
        actionItems[currentIndex + 1].focus();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        actionItems[currentIndex - 1].focus();
    } else if (e.key === 'Enter' && document.activeElement.classList.contains('action-item')) {
        document.activeElement.click();
    }
});

// Make action items focusable
document.querySelectorAll('.action-item').forEach(item => {
    item.setAttribute('tabindex', '0');
});

// Add tracking input focus effect
document.getElementById('trackingId').addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.2s ease';
});

document.getElementById('trackingId').addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
});

// Add sample tracking number on double-click
document.getElementById('trackingId').addEventListener('dblclick', function() {
    this.value = '612996989664721172348';
}); 