document.querySelectorAll('.category-nav a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.category-nav a').forEach((item) => {
            item.removeAttribute('aria-current');
        });
        link.setAttribute('aria-current', 'location');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll('.category-nav a').forEach((link) => {
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
                link.setAttribute('aria-current', 'location');
            }
        });
    });
}, { rootMargin: '-20% 0px -65%', threshold: 0 });

document.querySelectorAll('[data-category-section]').forEach((section) => {
    observer.observe(section);
});
