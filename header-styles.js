// First, the JavaScript to populate navigation items

const navData = {
    'Research at LCU' : {
        'AI-Driven Research': 'ai-driven-research.html' ,
         'Robotics Innovation' : 'robotics-innovation.html' ,
         'Virtual Labs' : 'virtual-labs.html' ,
         "Digital Health Initiatives" : "digital-health-initiatives.html" ,
         "Join Our Discord" : "join-our-discord.html" ,
         "Apply for Membership": "membership.html" ,
         "Current Projects": "current-projects.html" ,
         "Research Ethics": "research-ethics.html" ,
         "AI Partnerships": "ai-partnerships.html" ,
        "Robotics Collaborations" : "robotics-collaborations.html" 
    },
    'For High-IQ Professionals': {
        'Blogs': 'blogs.html',
        'IQ Test Applications': 'membership.html',
        'Virtual Networking Events': 'virtual-networking-events.html',
        'AI-Assisted Continuing Education': 'ai-assisted-continuing-education.html',
        'Robotic Surgery Simulations': 'robotic-surgery-simulations.html',
        'Advanced Research Opportunities': 'advanced-research-opportunities.html',
        'Digital Publications': 'digital-publications.html'
    },
    'Innovation & Education at LCU': {
        'Innovation': {
            'AI Research Labs': 'ai-research-labs.html',
            'Robotics Development Centers': 'robotics-development-centers.html',
            'Virtual Reality Medical Training': 'virtual-reality-medical-training.html',
            'Quantum Computing in Healthcare': 'quantum-computing-in-healthcare.html',
            'Nanotechnology Advancements': 'nanotechnology-advancements.html',
            'Biotechnology Breakthroughs': 'biotechnology-breakthroughs.html'
        },
        'Education': {
            'LCU Virtual Academy': 'lcu-virtual-academy.html',
            'AI-Assisted Learning Programs': 'ai-assisted-learning-programs.html',
            'Robotic Surgery Training': 'robotic-surgery-training.html',
            'Digital Health Informatics': 'digital-health-informatics.html',
            'Cognitive Science Programs': 'cognitive-science-programs.html',
            'Advanced Biotechnology Courses': 'advanced-biotechnology-courses.html'
        }
    },
    'For Medical and AI Professionals': {
        'Blogs': 'blogs.html',
        'AI Professionals': 'ai-professionals.html',
        'LCU Proceedings': 'lcu-proceedings.html',
        'Research Departments': 'research-departments.html',
        'AI-Enhanced Medical Resources': 'ai-enhanced-medical-resources.html',
        'Virtual Referral System': 'virtual-referral-system.html',
        'AI-Assisted Continuing Education': 'ai-assisted-continuing-education.html',
        'Advanced Robotic Surgery Simulations': 'advanced-robotic-surgery-simulations.html',
        'Digital Health Informatics': 'digital-health-informatics.html',
        'AI-Powered Clinical Decision Support': 'ai-powered-clinical-decision-support.html'
    },
    'Research & Education at LCU': {
        'Research': {
            'AI in Healthcare Research': 'ai-in-healthcare-research.html',
            'Robotics in Medicine': 'robotics-in-medicine.html',
            'Virtual Reality in Medical Training': 'virtual-reality-in-medical-training.html',
            'Quantum Computing for Drug Discovery': 'quantum-computing-for-drug-discovery.html',
            'Nanotechnology in Medicine': 'nanotechnology-in-medicine.html',
            'AI Ethics in Healthcare': 'ai-ethics-in-healthcare.html'
        },
        'Education': {
            'LCU Virtual Medical School': 'lcu-virtual-medical-school.html',
            'AI-Enhanced Medical Curriculum': 'ai-enhanced-medical-curriculum.html',
            'Robotic Surgery Training Programs': 'robotic-surgery-training-programs.html',
            'Digital Health Informatics Courses': 'digital-health-informatics-courses.html',
            'AI in Medical Diagnostics': 'ai-in-medical-diagnostics.html',
            'Future of Healthcare Symposiums': 'future-of-healthcare-symposiums.html'
        }
    },
    'Supporting LCU': {
        'Donate as a Gift': 'donation.html',
        'Donate Compute Power': 'donate-compute-power.html',
        'Virtual Fundraising Events': 'virtual-fundraising-events.html',
        'Sponsor AI Research': 'sponsor-ai-research.html',
        'Partner in Robotics Development': 'partner-in-robotics-development.html'
    }
};


// Function to create navigation items
function createNavItems() {
    const navItemsContainer = document.querySelector('.nav-items');
    
    Object.entries(navData).forEach(([category, links]) => {
        const div = document.createElement('div');
        div.className = 'nav-item';
        
        const button = document.createElement('button');
        button.textContent = category;
        
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        
        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'dropdown-container';
        
        const section = document.createElement('div');
        section.className = 'dropdown-section';
        
        const ul = document.createElement('ul');
        Object.entries(links).forEach(([text, href]) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = href;
            a.textContent = text;
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        section.appendChild(ul);
        dropdownContainer.appendChild(section);
        dropdown.appendChild(dropdownContainer);
        div.appendChild(button);
        div.appendChild(dropdown);
        navItemsContainer.appendChild(div);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', createNavItems);

// Updated CSS styles to work with your container structure
const styles = `
    /* Header and container styles */
    header {
        position: relative;
        background-color: white;
        border-bottom: 1px solid #e5e7eb;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        position: relative;
    }

    /* Navigation items */
    .nav-items {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .nav-item {
        position: static;
    }

    .nav-item button {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: #374151;
        cursor: pointer;
    }

    .nav-item button:hover {
        color: #2563eb;
    }

    /* Dropdown styles */
    .dropdown {
        display: none;
        position: fixed;
        top: var(--header-height, 64px);
        left: 0;
        width: 100%;
        background-color: white;
        border-top: 1px solid #e5e7eb;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .dropdown-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .dropdown-section {
        padding: 1rem;
    }

    .dropdown-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .dropdown-section ul li {
        margin-bottom: 0.5rem;
    }

    .dropdown-section ul li a {
        color: #374151;
        text-decoration: none;
        font-size: 0.875rem;
        display: block;
        padding: 0.25rem 0;
    }

    .dropdown-section ul li a:hover {
        color: #2563eb;
    }

    /* Show dropdown on hover */
    .nav-item:hover .dropdown {
        display: block;
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        .nav-items {
            display: none;
        }

        .mobile-menu-button {
            display: block;
        }

        .dropdown {
            position: absolute;
            top: 100%;
        }

        .dropdown-container {
            grid-template-columns: 1fr;
            padding: 1rem;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
