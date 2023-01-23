const dots = document.querySelectorAll('.mainblock__dots-dot');

const textContent = document.querySelectorAll('.mainblock__wrap');

const dotsParent = document.querySelector('.mainblock__dots');

const fon = document.querySelector('.fon');

// const pictureContent = document.querySelectorAll();

function hideTextContent() {
  textContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  dots.forEach((item) => {
    item.classList.remove('mainblock__dots-active');
  });
}

function showTextContent(i) {
  textContent[i].classList.add('show', 'fade');
  textContent[i].classList.remove('hide');
  dots[i].classList.add('mainblock__dots-active');
}

hideTextContent();
showTextContent(0);

dotsParent.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.classList.contains('mainblock__dots-dot')) {
    dots.forEach((item, i) => {
      if (target == item) {
        hideTextContent();
        showTextContent(i);
      }
    });
  }
});

//Modal
const modalTrigger = document.querySelector('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
  modal.classList.add('show', 'fade');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  fon.classList.add('fon-on');
}

modalTrigger.addEventListener('click', openModal);

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('fade', 'show');
  document.body.style.overflow = '';
  fon.classList.remove('fon-on');
}
modalCloseBtn.addEventListener('click', closeModal);
