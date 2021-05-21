var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: false,
    loop: true,
    loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
var swiper = new Swiper(".similar-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        425: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});
$('.more').on('click', function (e) {
   e.preventDefault();
    var $this = $(this);
    $this.toggleClass('is-open').prev().toggleClass('is-open');
});
$(".scroll-to").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top  - 100;
    $('body,html').animate({scrollTop: top}, 1500);
});