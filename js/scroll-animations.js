document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.slide-in-para');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' // Start animation slightly before the element is in view
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});