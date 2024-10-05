let reviewSwiper = new Swiper('.reviews-slider', {
    grabCursor: true,
    slidesPerView:6, 
  
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
      375: {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        grabCursor: true,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        grabCursor: true,
        spaceBetween: 28,
      },
    },
  });