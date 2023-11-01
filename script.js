const image = document.querySelector('img');
const header = document.querySelector('.header-container');

const propertyHeader = window.getComputedStyle(header);
const heightHeader = Math.floor(+propertyHeader.height.replace('px', ''));

window.addEventListener('scroll', () => {
  if (Math.floor(window.scrollY) + heightHeader > image.height) {
    header.style.backgroundColor = 'black';
    header.style.color = 'white';
    header.style.transition = '0.3s';
  } else {
    header.style.backgroundColor = 'white';
    header.style.color = 'black';
  }
});
