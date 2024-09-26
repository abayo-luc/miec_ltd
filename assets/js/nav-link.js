// Get all navigation links
const navLinks = document.querySelectorAll('#navmenu a');

// Function to update active link based on the current URL hash
function updateActiveLink() {
  const currentHash = window.location.hash;

  navLinks.forEach((link) => {
    // Remove 'active' class from all links
    link.classList.remove('active');

    // Add 'active' class to the link whose href matches the current hash
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    }
  });
}

// Call the function on page load
updateActiveLink();

// Update the active link when the hash changes
window.addEventListener('hashchange', updateActiveLink);
