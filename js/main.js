$(window).scroll(function() {
    let oTop = $('.section-fix').offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
})

