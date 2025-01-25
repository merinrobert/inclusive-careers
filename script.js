// Smooth scrolling for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         window.scrollTo({
//             top: targetElement.offsetTop - 50, // Adding offset for the fixed navigation bar
//             behavior: 'smooth'
//         });
//     });
// });

// Function to filter job listings based on URL query parameter
function filterJobsByQueryParam() {
    const urlParams = new URLSearchParams(window.location.search); // Get URL parameters
    const jobType = urlParams.get('type'); // Get the 'type' parameter (e.g., 'full-time')

    const jobCards = document.querySelectorAll('.job-card');

    // If a 'type' parameter exists, filter jobs
    if (jobType && jobType !== 'all') {
        jobCards.forEach(card => {
            const cardType = card.getAttribute('data-job-type');
            if (cardType !== jobType && jobType !== 'all') {
                card.style.display = 'none'; // Hide non-matching job types
            } else {
                card.style.display = 'block'; // Show matching job type
            }
        });
    } else {
        // If no query parameter, show all jobs
        jobCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    filterJobsByQueryParam();

    // Show loading message while content loads
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('loading-message');
    loadingMessage.textContent = 'Loading job listings...';
    document.body.appendChild(loadingMessage);

    // Simulate a delay for loading job listings
    setTimeout(() => {
        loadingMessage.style.display = 'none'; // Hide after 2 seconds (simulating load completion)
    }, 2000);
});

// Job Filter Functionality for Dropdown (Using query parameter)
const jobFilter = document.getElementById('job-filter');
jobFilter.addEventListener('change', (event) => {
    const filterValue = event.target.value;
    if (filterValue === 'all') {
        window.location.href = 'job.html'; // Reset to 'all jobs'
    } else {
        window.location.href = `job.html?type=${filterValue}`; // Redirect with type filter
    }
});
