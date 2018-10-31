
// Select DOM element [nav]
let nav = document.querySelector('#main'),
    topOfNav = nav.offsetTop;

// Event listener
window.addEventListener('scroll', fixNav);

// Function to create sticky nav
function fixNav() {
    console.log(topOfNav, window.scrollY);
    if(topOfNav <= window.scrollY) {
        document.body.classList.add('sticky-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('sticky-nav');
        document.body.style.paddingTop = 0;
    }
}
