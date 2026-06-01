const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});
