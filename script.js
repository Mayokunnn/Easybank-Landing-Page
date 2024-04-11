'use strict';

const menuButton = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const section1 = document.querySelector('.features');
const header = document.querySelector('header');
const navBar = document.querySelector('.nav');
const navHeight = navBar.getBoundingClientRect();

const openMenu = () => {
  menuButton.classList.toggle('is-active');
  mainMenu.classList.toggle('active');
  // overlay.classList.toggle('hidden');
};

menuButton.addEventListener('click', openMenu);

// overlay.addEventListener('click', openMenu);
const stickyNav = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) navBar.classList.add('sticky');
  else navBar.classList.remove('sticky');
};

// Sticky NavBar
const navbarObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`,
});

navbarObserver.observe(header);

// // Remove Menu
// const removeMenu = () => {
//   if (pageWidth >= 700) {
//     mainMenu.classList.remove('active');
//   }
// };

// removeMenu();

window.addEventListener('resize', (e) => {
  mainMenu.classList.remove('active');
  menuButton.classList.remove('is-active');
});

let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1, delay: .4 } });

tl.to('.nav__logo', {
  clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
  opacity: 1,
  y: 0,
})
  .to(
    mainMenu.children,
    { opacity: 1, y: 0, stagger: 0.4, duration: 0.4 },
    '-=0.5'
  )
  .from(header.children, { y: '100vh', stagger: 0.4, opacity: 0 }, '-=1')

  const myText = new SplitType('#text')

  gsap.to('.char', {
    y: 0,
    duration: 1,
    stagger: .1,
    ease: 'bounce',
    opacity: 1,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
    delay: 0.3,
    onComplete: function () {
      // Hide the preloader and show the main content
      setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('main').style.display = 'block';
      }, 500);
    },
  });