// Q&A Page Script - Interactive Gallery with Difficulty Filter

document.addEventListener('DOMContentLoaded', function() {
    // Initialize difficulty buttons
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const qaCards = document.querySelectorAll('.qa-card');

    // Add click event listeners to difficulty buttons
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const difficulty = this.getAttribute('data-difficulty');
            filterQuestions(difficulty, difficultyButtons, qaCards);
        });
    });

    // Add click event listeners to Q&A cards
    qaCards.forEach(card => {
        card.addEventListener('click', function() {
            const qaId = this.getAttribute('data-qa');
            handleQAClick(qaId);
        });

        // Add keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const qaId = this.getAttribute('data-qa');
                handleQAClick(qaId);
            }
        });
    });
});

function filterQuestions(difficulty, buttons, cards) {
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    cards.forEach(card => {
        if (difficulty === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else if (card.classList.contains(`difficulty-${difficulty}`)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });

    // Smooth scroll to first visible card
    const firstVisible = Array.from(cards).find(card => card.style.display !== 'none');
    if (firstVisible) {
        setTimeout(() => {
            firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function handleQAClick(qaId) {
    // You can implement modal opening, page navigation, or other interactions here
    console.log('Q&A clicked:', qaId);

    const qaNames = {
        'easy-1': 'VLAN Basics',
        'easy-2': 'Interface Configuration',
        'easy-3': 'Routing Fundamentals',
        'easy-4': 'Switching Concepts',
        'easy-5': 'OSI Model',
        'easy-6': 'TCP/IP Protocols',
        'easy-7': 'Authentication & AAA',
        'easy-8': 'Device Management',
        'hard-1': 'EIGRP Advanced',
        'hard-2': 'OSPF Design',
        'hard-3': 'BGP Configuration',
        'hard-4': 'Security Implementation',
        'hard-5': 'QoS & Traffic Shaping',
        'hard-6': 'Troubleshooting Scenarios',
        'hard-7': 'Network Automation',
        'hard-8': 'Enterprise Solutions'
    };

    // Log or perform action
    console.log('Opening: ' + (qaNames[qaId] || 'Unknown Q&A'));
    
    // Example: You could add a modal or redirect to the actual Q&A manual
    // showQAModal(qaId, qaNames[qaId]);
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
const cards = document.querySelectorAll('.qa-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        cards.forEach(c => {
            if (c.style.display !== 'none') {
                c.style.opacity = '0.7';
            }
        });
        this.style.opacity = '1';
    });

    card.addEventListener('mouseleave', function() {
        cards.forEach(c => {
            if (c.style.display !== 'none') {
                c.style.opacity = '1';
            }
        });
    });
});
