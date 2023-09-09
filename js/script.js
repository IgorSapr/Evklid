let swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: !0,
    pagination: { el: '.swiper-pagination', type: 'bullets', clickable: !0 },
  }),
  howBtn = document.querySelectorAll('.how__btn-carousel'),
  howSlider = document.querySelectorAll('.how__slider');
howBtn.forEach(function (e) {
  e.addEventListener('click', function (e) {
    const t = e.currentTarget.dataset.path;
    howBtn.forEach(function (e) {
      e.classList.remove('how__btn-carousel--active');
    }),
      e.currentTarget.classList.add('how__btn-carousel--active'),
      howSlider.forEach(function (e) {
        e.classList.remove('how__slider--active');
      }),
      document.querySelector(`[data-target="${t}"]`).classList.add('how__slider--active');
  });
}),
  new Accordion('.accordion');
let burger = document.querySelector('.burger'),
  menu = document.querySelector('.header__nav'),
  menuLinks = menu.querySelectorAll('.nav__link');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active'),
    menu.classList.toggle('header__nav--active'),
    document.body.classList.toggle('stop-scroll');
}),
  menuLinks.forEach(function (e) {
    e.addEventListener('click', function () {
      burger.classList.remove('burger--active'),
        menu.classList.remove('header__nav--active'),
        document.body.classList.remove('stop-scroll');
    });
  });
let headerBtn = document.querySelector('.header__search-btn'),
  headerInput = document.querySelector('.header__search-input'),
  headerCancel = document.querySelector('.header__search-cancel'),
  headerSearch = document.querySelector('.header__search-box');
headerBtn.addEventListener('click', function () {
  headerCancel.classList.toggle('header__search-cancel--active'),
    headerInput.classList.toggle('header__search-input--active'),
    headerSearch.classList.toggle('header__search-box--active'),
    headerBtn.classList.toggle('header__search-btn--active');
}),
  lazyload();
