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
