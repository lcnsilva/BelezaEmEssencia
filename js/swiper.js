const swiper = new Swiper('#swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1.4,
    
    autoplay: {
      delay: 40000000,
      disableOnInteraction: false
    },

    breakpoints : {
      768 : {
        slidesPerView: 2,
        spaceBetween : 15,
      },
      1024 : {
        slidesPerView: 3,      
        spaceBetween : 15,  
      },
      1280 : {
        slidesPerView: 3,   
        spaceBetween : 20,  
     
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiperPromocao = new Swiper('#swiper-promocao', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },

    breakpoints : {
      1280 : {
        // slidesPerView: 3,        
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
export default swiper;