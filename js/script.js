document.addEventListener('DOMContentLoaded', function() {
    // Scroll-to-Top Button Functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollThreshold = 200; // Pixels to scroll before button appears

    if (scrollToTopBtn) {
        // Show or hide the button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > scrollThreshold || document.documentElement.scrollTop > scrollThreshold || document.body.scrollTop > scrollThreshold) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        // Scroll to top when the button is clicked
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Bootstrap Component Initialization (Review)
    // Bootstrap components like the navbar toggler, accordion, and scrollspy are
    // primarily initialized via data-bs-* attributes in the HTML.
    // No components currently used in index.html require explicit JavaScript initialization here.
    // If components like tooltips or popovers were added, they would be initialized as shown below:
    //
    // Example for Tooltips:
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl);
    // });
    //
    // Example for Popovers:
    // const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    // const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    //   return new bootstrap.Popover(popoverTriggerEl);
    // });

    // Smooth Scrolling (Confirmation)
    // Smooth scrolling for on-page anchor links (like those in the navbar)
    // is handled by the CSS rule `scroll-behavior: smooth;` in `css/style.css`.
    // No additional JavaScript is strictly necessary for this specific feature if
    // the CSS approach is sufficient and widely supported by target browsers.
    // The scroll-to-top button uses `window.scrollTo({ behavior: 'smooth' })`
    // for its smooth scroll action, which is independent of the CSS property.

    // FUTURE REFINEMENT: Add more sophisticated error handling or logging if new JS features are added.
    // FUTURE REFINEMENT: For larger projects, consider splitting JS into modules.
});
