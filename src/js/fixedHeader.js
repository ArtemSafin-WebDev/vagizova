export default function fixedHeader() {
    const header = document.querySelector('.page-header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 80) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }, {
        passive: true
    });
}
