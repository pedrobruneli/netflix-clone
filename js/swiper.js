const swiper = new Swiper(".swiper", {
    slidesPerView: 5.32,
    centeredSlides: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-nextt',
        prevEl: '.swiper-button-prevv',
      },
    loop: true,
    breakpoints: {
      0:{
        slidesPerView: 1.32,
      },
      500:{
        slidesPerView: 2.32,
      },
      700:{
        slidesPerView: 3.32,
      },  
      1000:{
        slidesPerView: 4.32,
      },
      1300:{
        slidesPerView: 5.32,
      },
    }
});