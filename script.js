const image = document.querySelector('.welcome-main');
const header = document.querySelector('.header-container');
const links = document.querySelectorAll('a');
// const propertyHeader = window.getComputedStyle(header);
// const heightHeader = Math.floor(+propertyHeader.height.replace('px', ''));

const heightImage = image.scrollHeight;
const heightHeader = header.scrollHeight;

window.addEventListener('scroll', () => {
  if (Math.floor(window.scrollY) + header.scrollHeight > heightImage) {
    header.classList.add('change-color-header');
    links.forEach((link) => {
      link.classList.add('change-color-menu');
    });
  } else {
    header.classList.remove('change-color-header');
    links.forEach((link) => {
      link.classList.remove('change-color-menu');
    });
  }
});
