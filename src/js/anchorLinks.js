import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function anchorLinks() {
    let headerHeight = document.querySelector('.page-header').offsetHeight;

    window.addEventListener('resize', () => {
        headerHeight = document.querySelector('.page-header').offsetHeight;
    })
    document.addEventListener('click', event => {
        if (event.target.matches('a') || event.target.closest('a')) {
            const link = event.target.matches('a') ? event.target : event.target.closest('a');
            const hash = link.hash;

            if (hash && hash.startsWith('#to-')) {
                event.preventDefault();

                const elementToScroll = document.getElementById(hash.replace(/^#to\-/, ''));
                if (elementToScroll) {
                    if (window.menuOpen) {
                        window.closeMenu();
                    } else {
                        console.log('menu not open');
                    }

                    gsap.to(window, {
                        duration: 2,
                        ease: 'power2.out',
                        scrollTo: {
                            y: elementToScroll,
                            autoKill: false,
                            offsetY: headerHeight * 1.2
                        }
                    });
                }
            }
        }
    });
}
