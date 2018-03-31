import '../css/style.scss';
import '../icons/css/fa-svg-with-js.css';
import '../icons/js/fontawesome-all.js';

import './Modules/stickyNav';
import './Modules/smoothScroll';



// const revealOnScroll = (() => {

//     const slideElems = document.querySelectorAll('.slideUp');

//     function revealElem() {
//         slideElems.forEach((elem, i) => {
        
//             const slideInAt = (window.scrollY + window.innerHeight) -  elem.clientHeight / 2;
//             const isHalfShown = slideInAt > elem.offsetTop;
//             if (isHalfShown) {
//                 setTimeout(() => {
//                     elem.classList.add('slideUp--active'); 
//                 }, 400 * (i + 1))
//               }
    
//         })
//     }

//     window.addEventListener('scroll', revealElem);

// })()


// window.addEventListener('scroll', () => {

//     const elements = document.querySelectorAll('.slideUp');

//     elements.forEach((elem, i) => {

//         const slideInAt = (window.scrollY + window.innerHeight) - elem.offsetTop;
//         const isHalfShown = slideInAt >= elem.offsetTop;

//         if(isHalfShown) {
//             setTimeout(() => {
//                 elem.classList.add('slideUp--active');
//             }, 300 * (i + 1));
//         }
//     })
// })













