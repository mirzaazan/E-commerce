// Initialize Swiper Slider
const swiper = new Swiper('.main-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Mobile Menu Toggle (Simple Placeholder)
document.querySelector('.menu-icon').addEventListener('click', () => {
    alert('Mobile Menu clicked! Aap yahan sidebar navigation add kar sakte hain.');
});