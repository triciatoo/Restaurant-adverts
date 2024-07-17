document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop, // Remove the adjustment here
                behavior: "smooth"
            });
        });
    });

    // Hover effect for restaurant images
    const restaurantImages = document.querySelectorAll(".restaurant img");
    restaurantImages.forEach(image => {
        image.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        image.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.3s ease";
        });
    });
});
