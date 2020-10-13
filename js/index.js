window.addEventListener('scroll', ()=> {
    let wScroll = window.pageYOffset;
    let parallaxImg = document.querySelectorAll('.parallax-img');
    for(let i = 0; i < parallaxImg.length; i++) {
        parallaxImg[i].style.transform = `translateY(${(-wScroll / 10) + 'px'})`;
    }
});

var slideIdex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIdex++;
    if(slideIdex > slides.length) {
        slideIdex = 1;
    }
    slides[slideIdex-1].style.display = 'grid';
    setTimeout(showSlides, 7000);
}