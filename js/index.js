window.addEventListener('scroll', ()=> {
    let wScroll = window.pageYOffset;
    let parallaxChild = document.querySelectorAll('.parallax-child');
    let selectedParallaxChild = document.querySelectorAll('.selected .parallax-child');
    for(let i = 0; i < parallaxChild.length; i++) {
        parallaxChild[i].style.top = `${(wScroll / 12) + 'px'}`;
    }
    for(let i = 0; i < selectedParallaxChild.length; i++) {
        selectedParallaxChild[i].style.top = `${(wScroll / 18) + 'px'}`;
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

//Products Slider


