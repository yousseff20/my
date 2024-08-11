
ScrollReveal().reveal('.reveal', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

//---------------------
// function handleScroll() {
//     const elements = document.querySelectorAll('.color-change');
//     elements.forEach(el => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//             el.classList.add('in-view');
//         } else {
//             el.classList.remove('in-view');
//         }
//     });
// }

// window.addEventListener('scroll', handleScroll);
// handleScroll(); // Check on initial load