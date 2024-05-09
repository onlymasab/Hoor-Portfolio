document.addEventListener("DOMContentLoaded", function() {
    // Example: Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
