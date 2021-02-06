$(document).ready(function () {
    // Fashion corusel start
    if ($("#fashion").length) {
        $('#fashion .slider .owl-carousel').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            mouseDrag: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
        })
    }
    $( ".slider .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
    $( ".slider .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');
    
    // Collection corusel start
    if ($("#collection").length) {
        $('#collection .slider .owl-carousel').owlCarousel({
            margin: 30,
            items: 3,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }
})

