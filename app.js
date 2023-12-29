window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const body = document.body;

    if (scrollPosition > 100) { // Adjust the scroll position at which the image appears
        body.classList.add('hide-image');
    } else {
        body.classList.remove('hide-image');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { rootMargin: '0px 0px -30% 0px' });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
