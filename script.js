const image = document.querySelector('img');
const header = document.querySelector('.header-container');

// const propertyHeader = window.getComputedStyle(header);
// const heightHeader = Math.floor(+propertyHeader.height.replace('px', ''));

const heightHeader = header.scrollHeight;

window.addEventListener('scroll', () => {
  if (Math.floor(window.scrollY) + header.scrollHeight > image.height) {
    header.classList.add('change-color-header');
  } else {
    header.classList.remove('change-color-header');
  }
});
