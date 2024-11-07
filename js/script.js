const navs = document.querySelectorAll('nav');

// this actually builds the gutter items and puts them in the right location
function buildGutter(location, items) {
    // target the nav container specified in 'location' (either primary or secondary)
    const nav = document.querySelector(`.${location}`);
    
    // Clear existing links to avoid duplicates
    nav.innerHTML = '';

    // for each item in the array, create a link and add it inside the nav container
    items.forEach((item) => {
        const gutterContainer = document.createElement('div'); // Use a div container as in script1.js
        const gutterLink = document.createElement('a');
        gutterLink.href = `${item.toLowerCase()}.html`; // Ensure href is consistent
        gutterLink.className = item.toLowerCase(); // Maintain the style classes
        const span = document.createElement('span');
        span.textContent = item;
        gutterLink.appendChild(span);
        gutterContainer.appendChild(gutterLink); // Append link to the container
        nav.appendChild(gutterContainer); // Append the container to nav
    });

    // check the screen size and style the nav as required
    setNavSize();
}

function setNavSize() {
    let linkWidth = 60;

    // get the screen size
    if (window.innerWidth < 768) {
        linkWidth = 40;
    }

    navs.forEach((el) => {
        let navChildren = el.childElementCount;
        const navWidth = `${linkWidth * navChildren}px`;
        el.style.flexBasis = navWidth;
    });
}

// Ensure resizing correctly adjusts navigation size
addEventListener("resize", () => setNavSize());
