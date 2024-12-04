// Import
import { Navigation } from "./navigatie";
import { MouseFocus } from "./mouseFocus";
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import Splide from '@splidejs/splide';
import GLightbox from 'glightbox';

// AlpineJS
// @ts-ignore:next-line
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(focus)
Alpine.start()

// Our import scripts that can run immediately
new MouseFocus();
new Navigation();

// Global get CSRF token function (used by forms).
// @ts-ignore:next-line
window.getToken = async () => {
    return await fetch('/!/DynamicToken/refresh')
        .then((res) => res.json())
        .then((data) => {
            return data.csrf_token
        })
        .catch(function (error) {
            this.error = 'Something went wrong. Please try again later.'
        })
}

// Global GLightbox initializer
// @ts-ignore:next-line
window.initializeLightbox = (id: string) => {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        selector: id,
    });
}


// Initialize all splide sliders
var sliders = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < sliders.length; i++ ) {
  new Splide( sliders[ i ] ).mount();
}


/**
 * Smoothly scroll to an anchor on the page when a link is clicked, considering an offset.
 * If it's a regular link, it will perform the default behavior.
 * @param event - The click event.
 */
function smoothScrollToAnchor(event: Event): void {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');

    if (anchor) {
      event.preventDefault();

      const href = anchor.getAttribute('href') as string;
      const targetElement = document.querySelector(href);

      if (targetElement) {
        const header = document.querySelector('#page-header');
        const offset = header ? header.clientHeight : 0;

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }
  }

  // Add an event listener to the document for handling click events
  document.addEventListener('click', smoothScrollToAnchor);




var cocktailsCarousel = document.getElementById('cocktails-carousel');
if (cocktailsCarousel) {
    new Splide('#cocktails-carousel').mount();
}
