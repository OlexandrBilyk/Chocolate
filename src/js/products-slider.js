let productSwiper = new Swiper('.products-slider', {
    grabCursor: true,
    slidesPerView:8,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    keyboard: {
      enabled: true,
    },
  
    freeMode: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
  
    speed: 750,
  
    breakpoints: {
      320: {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        grabCursor: true,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        grabCursor: true,
        spaceBetween: 18,
      },
    },
  });