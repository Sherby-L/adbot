const dots = document.querySelectorAll('.mainblock__dots-dot');

const textContent = document.querySelectorAll('.mainblock__wrap');

const dotsParent = document.querySelector('.mainblock__dots');

// const pictureContent = document.querySelectorAll();

function hideTextContent() {
  textContent.forEach((item) => {
    item.classList.add('active-off', 'fade');
    item.classList.remove('active-on');
  });

  dots.forEach((item) => {
    item.classList.remove('mainblock__dots-active');
  });
}

function showTextContent(i) {
  textContent[i].classList.add('active-on');
  textContent[i].classList.remove('active-off');
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
  modalCloseBtn = document.querySelector('[data-close]'),
  fon = document.querySelector('.fon');

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  fon.classList.add('fon-on');
}

modalTrigger.addEventListener('click', openModal);

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  fon.classList.remove('fon-on');
}
modalCloseBtn.addEventListener('click', closeModal);

fon.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

let numbersInp = document.querySelectorAll(
  '.modal-authentication__numbers-item'
);

numbersInp.forEach((number) => {
  number.oninput = function () {
    this.value = this.value.substr(0, 1);
  };
  if (number.value > 0) {
    console.log('go');
  }
});

const triggerCome = document.querySelector('[data-modal-come]'),
  modalCome = document.querySelector('.modal-authentication'),
  closeComeBtn = document.querySelector('[data-close-come]');

function openModalCome() {
  modalCome.classList.add('show');
  modalCome.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  fon.classList.add('fon-on');
}

triggerCome.addEventListener('click', openModalCome);

function closeModalCome() {
  modalCome.classList.add('hide');
  modalCome.classList.remove('show');
  document.body.style.overflow = '';
  fon.classList.remove('fon-on');
}
closeComeBtn.addEventListener('click', closeModalCome);
