// Smooth scroll for all internal links + highlight references
document.querySelectorAll('.nav-link, .btn-primary, .btn-outline-secondary, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if (hash && hash !== '#' && hash.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, hash);
            }
        }
    });
});

// Highlight references when clicked from citation links
document.querySelectorAll('.cite-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
            document.querySelectorAll('.references-list li').forEach(li => li.classList.remove('highlight-ref'));
            targetElem.classList.add('highlight-ref');
            targetElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                targetElem.classList.remove('highlight-ref');
            }, 2500);
        }
    });
});

// Back to Top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backBtn.style.display = 'flex';
        backBtn.style.alignItems = 'center';
        backBtn.style.justifyContent = 'center';
    } else {
        backBtn.style.display = 'none';
    }
});
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});