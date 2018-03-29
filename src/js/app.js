import '../css/style.scss';
import '../icons/css/fa-svg-with-js.css';
import '../icons/js/fontawesome-all.js';


const stickyNav = (() => {

    function debounce(func, wait = 10, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

    const background = document.querySelector('#background');
    const logo = document.querySelector('#logo');
    const nav = document.querySelector('#nav');

    function fixedNav() {
        if(window.scrollY >= 100) {
            background.classList.add('background-active');
            logo.classList.add('logo-active');
            nav.classList.add('nav-expanded');
        }else {
            background.classList.remove('background-active');
            logo.classList.remove('logo-active');
            nav.classList.remove('nav-expanded');
        }
    }

    window.addEventListener('scroll', debounce(fixedNav))
})()









