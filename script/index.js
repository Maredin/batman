//slider
try {
const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true
});

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
});

const sliderMain = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 6
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;

const video = document.querySelectorAll('video');

sliderMain.on('slideChange', ()=> {
    for(i = 0; i < video.length; i += 1) {
        video[i].pause();
    }
});

const pagination = document.querySelector('.pagination'),
      paginationBtn = document.querySelector('.paginator__array');

      paginationBtn.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active');
      });
} catch {
    console.log('на этой странице нет слайдера')
}
//burger

const burger = document.querySelector('.burger'),
      navigation = document.querySelector('.navigation'),
      btnClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation__active')
});
btnClose.addEventListener('click', () => {
    navigation.classList.remove('navigation__active')
});


//music
try {
const mute = document.querySelector('.mute__checkbox');
const audio  = new Audio('audio/waterTower.mp3')
const checkMute = () => {
    if(mute.checked) {
        audio.play().catch(() => {
            mute.checked = false;
        });
    } else {
        audio.pause();
    }
}
if (mute) {
    setTimeout(checkMute, 4000);
}

mute.addEventListener('change', checkMute);
} catch {
    console.log('на этой странице нет музыки')
}
