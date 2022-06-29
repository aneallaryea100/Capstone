const hambx = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('.navvme');
const navLink = document.querySelectorAll('.navlinksx');

/** **************hamburger actions****************** */
hambx.addEventListener('click', () => {
  nav.classList.add('show');
});

close.addEventListener('click', () => {
  nav.classList.remove('show');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  nav.classList.remove('show');
}));