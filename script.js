// script.js

// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is already set in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Set initial dark mode state based on local storage
    if (isDarkMode) {
        body.classList.add('dark');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDarkModeEnabled = body.classList.contains('dark');

        // Update local storage with current dark mode state
        localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', toggleDarkMode);
