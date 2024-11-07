document.addEventListener('DOMContentLoaded', function() {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cards = document.querySelector('.cards');
    let scrollTriggerInstance;
    
    function initScroll() {
        if (window.innerWidth >= 768 && cardsWrapper && cards) {
            // Desktop version - keep as is
            gsap.registerPlugin(ScrollTrigger);

            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }

            const scrollWidth = cards.scrollWidth - cardsWrapper.offsetWidth;

            scrollTriggerInstance = ScrollTrigger.create({
                trigger: cardsWrapper,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                pin: true,
                anticipatePin: 1,
                scrub: 1,
                invalidateOnRefresh: true,
                horizontal: true,
                onUpdate: self => {
                    gsap.to(cards, {
                        x: -self.progress * scrollWidth,
                        ease: "none",
                        overwrite: "auto"
                    });
                }
            });

            cardsWrapper.addEventListener('wheel', function(e) {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    let currentScroll = gsap.getProperty(cards, "x");
                    gsap.to(cards, {
                        x: currentScroll - e.deltaY,
                        ease: "power2.out",
                        overwrite: true
                    });
                }
            });
        } else {
            // Mobile version
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }
            gsap.set(cards, {x: 0, clearProps: "all"}); // Reset any transformations
            cardsWrapper.style.overflowY = 'visible';
            cardsWrapper.style.overflowX = 'hidden';
        }
    }

    initScroll();

    // Reinitialize on window resize
    window.addEventListener('resize', function() {
        initScroll();
    });
});