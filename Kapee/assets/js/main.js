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
     

    // Products corusel start
    if ($("#products").length) {
        $('#products .slider .owl-carousel').owlCarousel({
            dots: false,
            loop: true,
            nav: true,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
    }

    $(".product-color").click(function(e){
        e.preventDefault();
        $(".product-color").removeClass("active").next().addClass("active");
        
    })
     

    // Category corusel start
    if ($("#category").length) {
        $('#category .category-content .owl-carousel').owlCarousel({
            dots: false,
            loop: false,
            nav: true,
            mouseDrag: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
    }
    $( ".slider .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
    $( ".slider .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');


    // Customer corusel start
    if ($("#customer").length) {
        $('#customer .customer-testimonial .owl-carousel').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            mouseDrag: true,
        })
    }
    // $( ".slider .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
    // $( ".slider .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');

    
})

