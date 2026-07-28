// Lab Page Script - Interactive Gallery

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.thumbnail-card');
    
    // Add click event listeners to cards
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const labId = this.getAttribute('data-lab');
            handleLabClick(labId);
        });

        // Add keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const labId = this.getAttribute('data-lab');
                handleLabClick(labId);
            }
        });
    });
});

function handleLabClick(labId) {
    // You can implement modal opening, page navigation, or other interactions here
    console.log('Lab clicked:', labId);
    
    // Example: Show alert (replace with actual lab manual display)
    const labNames = {
        'lab-1': 'Layer 2 Switching Lab',
        'lab-2': 'EIGRP Configuration Lab',
        'lab-3': 'OSPF Routing Lab',
        'lab-4': 'BGP Fundamentals Lab',
        'lab-5': 'Security & ACLs Lab',
        'lab-6': 'QoS & Traffic Management Lab',
        'lab-7': 'Troubleshooting & Tools Lab',
        'lab-8': 'Enterprise Integration Lab'
    };
    
    // You can add your custom logic here
    // For now, we'll just log it
    console.log('Opening: ' + (labNames[labId] || 'Unknown Lab'));
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect tracking
const cards = document.querySelectorAll('.thumbnail-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        cards.forEach(c => c.style.opacity = '0.7');
        this.style.opacity = '1';
    });

    card.addEventListener('mouseleave', function() {
        cards.forEach(c => c.style.opacity = '1');
    });
});
