# FedEx-Style Tracking System

A responsive, mobile-first web application that replicates the FedEx mobile interface design with working tracking functionality.

## Features

- ✅ Mobile-responsive design
- ✅ Real-time clock in status bar
- ✅ Working tracking form with sample tracking number
- ✅ Tracking results page with detailed package information
- ✅ Package location: 245 South 100 East, Monroe, Utah 84754
- ✅ Interactive timeline showing package progress
- ✅ Copy tracking number functionality
- ✅ Share tracking information
- ✅ Smooth animations and transitions
- ✅ FedEx brand colors and styling
- ✅ Browser navigation bar simulation

## Pages

### Main Page (`index.html`)
- Tracking form with sample tracking number: **123456789012**
- Three action items (Store Hours, Service Alerts, Return Package)
- Promotional image with FedEx airplanes
- Click "TRACK" or press Enter to view tracking results

### Tracking Results Page (`tracking.html`)
- Detailed package information
- Current location: Monroe, Utah
- Estimated delivery: Tomorrow by 8:00 PM
- Interactive timeline showing package progress
- Copy and share functionality
- Action buttons for notifications, printing, and support

## Quick Start

### Option 1: Local Development Server
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 2: Free Hosting Services

#### GitHub Pages (Recommended)
1. Create a GitHub repository
2. Upload these files to your repo
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main branch
5. Your site will be live at: `https://yourusername.github.io/repository-name`

#### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant live URL
4. Custom domain available

#### Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Automatic deployment

## File Structure
```
├── index.html              # Main page with tracking form
├── tracking.html           # Tracking results page
├── styles.css              # Main page styling
├── tracking-styles.css     # Tracking page styling
├── script.js               # Main page functionality
├── tracking-script.js      # Tracking page functionality
└── README.md               # This file
```

## Testing Features

- **Real-time clock**: Updates every second in the status bar
- **Tracking form**: Enter any tracking number or use sample: 123456789012
- **Tracking results**: Shows package location in Monroe, Utah
- **Interactive timeline**: Displays package progress from pickup to delivery
- **Copy functionality**: Copy tracking number to clipboard
- **Share functionality**: Share tracking information
- **Mobile simulation**: Includes browser navigation bar

## Package Information

- **Tracking Number**: 123456789012
- **Current Location**: 245 South 100 East, Monroe, Utah 84754
- **Status**: In Transit
- **Estimated Delivery**: Tomorrow by 8:00 PM
- **Service**: FedEx Ground
- **Weight**: 2.5 lbs

## Customization

### Colors
- Primary Purple: `#4d148c`
- Orange Button: `#ff6600`
- Blue Links: `#0066cc`

### Sample Tracking Numbers
- `123456789012` (Main sample tracking number)

## Browser Compatibility
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Performance
- Lightweight (under 100KB total)
- Fast loading
- Optimized for mobile
- No external dependencies (except Font Awesome CDN)

## License
Free to use and modify for any purpose. 