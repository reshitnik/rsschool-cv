const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  slidesPerGroup: 2,

	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
	clickable: true
  }
});