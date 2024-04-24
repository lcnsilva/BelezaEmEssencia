const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },

    breakpoints : {
      1280 : {
        slidesPerView: 3,        
      }
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 
  var botaoMenu = document.getElementById('abrirMenu');
  var menu = document.getElementById('lista__menu');

  botaoMenu.addEventListener("click", function(){
    if(menu.style.display == 'block'){
      menu.style.display = 'none';
    } else{
      menu.style.display ='block';
    }
  });