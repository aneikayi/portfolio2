document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Clone the first slide and append it to the end
    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);

    function updateSlider() {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        if (currentIndex === slides.length) {
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';
                currentIndex = 0;
            }, 500); // This should match the transition duration
        }
    }

    function nextSlide() {
        currentIndex++;
        updateSlider();
        if (currentIndex > slides.length) {
            currentIndex = 0;
        }
    }

    // Change poster every 3 seconds (3000 milliseconds)
    setInterval(nextSlide, 3000);
});