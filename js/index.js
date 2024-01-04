


let sliderPage = new Swiper('.page', {
   wrapperClass: 'page__wrapper',
   slideClass: 'page__slide',
   
    speed: 800,
    direction: 'vertical',
    observeParents: true,
    observeSlideChildren: true,
    watchOverflow: true,
    slidesPerView: 1 ,

    pagination: {
          el: ".page__pagination",
          type: "bullets",
          clickable: true,
          bulletClass: "page__bullet",
          bulletActiveClass: "page__bullet-active",
        },
})