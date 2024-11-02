// First, the JavaScript to populate navigation items
const navData = {
    'Research at LCU': {
        'Research Opportunities': '#',
        'Research Faculty': '#',
        'Laboratories': '#',
        'Core Facilities': '#',
        'Centers & Programs': '#'
    },
    'Digital Library': {
        'Online Resources': '#',
        'Digital Collections': '#',
        'Research Databases': '#',
        'E-Journals': '#'
    },
    'For Patients': {
        'Patient Services': '#',
        'Find a Doctor': '#',
        'Appointments': '#',
        'Patient Portal': '#'
    },
    // Add more navigation items as needed
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
