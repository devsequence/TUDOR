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



function findVideos() {
    let videos = document.querySelectorAll('.video iframe');
    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}
function setupVideo(video) {
    let link = video.querySelector('.video-link');
    let media = video.querySelector('.video-media');
    let button = video.querySelector('.video-btn');
    let id = parseMediaURL(media);
    video.addEventListener('click', () => {
        let iframe = createIframe(id);
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');
}
function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
    return match[1];
}
function createIframe(id) {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video-media');
    return iframe;
}
function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}
findVideos();