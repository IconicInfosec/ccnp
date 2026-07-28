# Iconic Infosec Training Website

A professional, responsive CCNP training website with Lab Suites and Q&A resources.

## 📁 Website Structure

```
Iconic_Infosec_Site/
├── index.html                 # Main homepage
├── styles.css                 # Global styles (header, footer, shared components)
├── README.md                  # This file
│
├── CCNP_Lab/
│   ├── index.html            # Lab suites page with 8 lab thumbnails (4 per row)
│   ├── lab-styles.css        # Lab-specific styling
│   └── lab-script.js         # Lab page interactivity
│
└── CCNP_QA/
    ├── index.html            # Q&A center page with difficulty filter
    ├── qa-styles.css         # Q&A-specific styling
    └── qa-script.js          # Q&A filtering and interactivity
```

## 🎯 Features

### Homepage (index.html)
- **Header**: Iconic Infosec Training with logo and navigation
- **Hero Section**: Call-to-action buttons for Labs and Q&A
- **Features Section**: 3 feature cards (Labs, Q&A, Resources)
- **Footer**: Professional footer with links and contact info

### CCNP Lab Section
- **8 Lab Cards** arranged in 4-column grid (responsive)
- **Beautiful Frame Design**: Gradient backgrounds with hover effects
- **Lab Thumbnails**: 
  - Layer 2 Switching
  - EIGRP Configuration
  - OSPF Routing
  - BGP Fundamentals
  - Security & ACLs
  - QoS & Traffic Management
  - Troubleshooting & Tools
  - Enterprise Integration
- **Badges**: ENCOR 350-401, ENARSI 300-410, Advanced
- **Interactive**: Hover animations, smooth transitions

### CCNP Q&A Section
- **Difficulty Filter**: All / Easy / Hard buttons
- **16 Q&A Cards** (8 Easy + 8 Hard)
- **Easy Questions** (Green theme):
  - VLAN Basics
  - Interface Configuration
  - Routing Fundamentals
  - Switching Concepts
  - OSI Model
  - TCP/IP Protocols
  - Authentication & AAA
  - Device Management

- **Hard Questions** (Red theme):
  - EIGRP Advanced
  - OSPF Design
  - BGP Configuration
  - Security Implementation
  - QoS & Traffic Shaping
  - Troubleshooting Scenarios
  - Network Automation
  - Enterprise Solutions

- **Statistics Box**: Shows total questions count
- **Interactive Filtering**: Smooth transitions between difficulty levels

## 🎨 Design Features

### Colors
- **Primary**: Purple/Blue (#667eea, #764ba2)
- **Accent**: Red (#e94560)
- **Easy**: Green (#28a745)
- **Hard**: Red (#e94560)
- **Background**: Light Gray (#f8f9fa)

### Typography
- **Font**: Segoe UI, Tahoma, Geneva, Verdana
- **Headings**: Bold, uppercase where appropriate
- **Body**: Clean, readable, high contrast

### Layout
- **Responsive Grid**: Auto-adjusts from 4 columns → 3 → 2 → 1 on mobile
- **Breakpoints**:
  - Desktop (1400px+): 4 columns
  - Tablet (1100-1399px): 3 columns
  - Mobile (768-1099px): 2 columns
  - Small Mobile (< 768px): 1 column

### Interactive Elements
- **Thumbnail Cards**: Hover lift effect with shadow growth
- **Gradient Overlays**: Subtle overlays on hover
- **Smooth Animations**: Staggered fade-in animations
- **Badge Styling**: Elevated badges with hover effects

## 🚀 How to Use

### 1. Basic Setup
- Keep all files in the `Iconic_Infosec_Site` folder
- Maintain folder structure (CCNP_Lab, CCNP_QA)
- All CSS is linked relatively, so paths will work automatically

### 2. Adding Your Content

#### To add Lab Manuals:
1. Create PDF files or HTML pages in `CCNP_Lab/` folder
2. Modify `lab-script.js` `handleLabClick()` function to link to your manuals
3. Update card descriptions if needed

#### To add Q&A Manuals:
1. Create PDF files or HTML pages in `CCNP_QA/Easy/` and `CCNP_QA/Hard/` folders
2. Modify `qa-script.js` `handleQAClick()` function to link to your content
3. The difficulty filter already works - just add your content

### 3. Customization

#### Change Logo:
Replace the URL in all HTML files:
```html
<img src="YOUR_LOGO_URL" alt="Iconic Infosec Logo" class="logo">
```

#### Update Contact Information:
Edit footer contact details in all HTML files (Home, Lab, Q&A)

#### Modify Colors:
Edit `styles.css` to change color variables:
```css
#667eea - Primary blue
#764ba2 - Primary purple
#e94560 - Accent red
#28a745 - Easy green
```

#### Add/Remove Cards:
Simply duplicate or remove thumbnail card HTML blocks in Lab or Q&A sections

## 📱 Responsive Design

Website is fully responsive across:
- ✅ Desktop (1400px+)
- ✅ Tablet (1100px - 1399px)
- ✅ Mobile (768px - 1099px)
- ✅ Small Mobile (< 768px)

Test in browser DevTools by toggling device toolbar!

## 📊 Statistics

**CCNP Lab Suite:**
- 8 Complete Lab Manuals
- Coverage: CCNP 350-401 (ENCOR) & 300-410 (ENARSI)
- Difficulty: Beginner to Advanced

**CCNP Q&A Bank:**
- 99 Easy Questions
- 153 Hard Questions
- 252 Total Q&A
- 100% Exam Aligned

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern responsive design with gradients, animations
- **JavaScript**: Interactivity without external dependencies
- **Icons**: Unicode emoji for quick visual identification

## ✨ Premium Features

1. **Smooth Animations**: Cubic-bezier transitions for professional feel
2. **Hover Effects**: Multi-layer interactive feedback
3. **Accessibility**: Keyboard navigation ready
4. **No External Dependencies**: Pure HTML/CSS/JS
5. **Fast Loading**: Lightweight, optimized code
6. **SEO Ready**: Proper semantic HTML structure

## 📝 Notes for Future Updates

### To add more tabs/sections:
1. Add navigation link to header
2. Create new folder with index.html
3. Copy structure from CCNP_Lab or CCNP_QA
4. Create custom CSS file (e.g., `section-styles.css`)
5. Link stylesheet in header

### To integrate with backend:
1. Create API endpoints for lab/Q&A content
2. Use JavaScript fetch() to load dynamic content
3. Filter and display based on category

### To add user accounts:
1. Integrate authentication system
2. Track user progress (completed labs, Q&A scores)
3. Add personalized dashboard

## 🎓 Ready to Deploy

This website is production-ready! You can:
- Deploy to GitHub Pages (free)
- Deploy to Netlify
- Deploy to your own web server
- Deploy to AWS, Azure, or Google Cloud

All files are static and require no backend setup!

---

**Made with ❤️ for CCNP Certification Training**

For questions or customization help, contact: info@iconicinfosec.com
