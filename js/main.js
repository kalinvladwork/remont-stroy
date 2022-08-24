$(document).ready(function(){
    // slider-video
    $('.slider-video-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-video-nav',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: false,
                    arrows: true,

                }
            }
        ]
    });
    $('.slider-video-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-video-for',
        centerMode: true,
        focusOnSelect: true
    });

    // slider-photo
    $('.slider-photo-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-photo-nav',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: false,
                    AdaptiveHeight: true,
                    arrows: true,
                }
            }
        ]
    });
    $('.slider-photo-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-photo-for',
        centerMode: true,
        focusOnSelect: true,
    });

    // accordion
    let accordion = document.getElementsByClassName("accordion-item");
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }
    let height = document.getElementsByClassName("accordion-content").offsetHeight;
    console.log(height);

    // scrolling
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // burger
    let burger = document.querySelector("#navToggle");
    burger.addEventListener("click", function(event){
        event.preventDefault();
        document.body.classList.toggle("burger-active");
    });
    $('.burger-nav_link').click(function () {
        $('body').removeClass('burger-active');
    });

    // modal
    // $('#btn-modal').click(function() {
    //     document.body.classList.add("modal-active");
    // })
    // $('.modal-overlay').click(function() {
    //     $('body').removeClass('modal-active');
    // })


    var modals = document.querySelectorAll('[data-modal]');

    modals.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            var modal = document.getElementById(trigger.dataset.modal);
            modal.classList.add('open');
            var exits = modal.querySelectorAll('.modal-exit');
            exits.forEach(function(exit) {
                exit.addEventListener('click', function(event) {
                    event.preventDefault();
                    modal.classList.remove('open');
                });
            });
        });
    });



    // scroll up
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
