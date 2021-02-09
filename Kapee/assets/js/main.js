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


    // category-slider corusel start
    if ($("#category-slider").length) {
        $('#category-slider .category-slider-content .owl-carousel').owlCarousel({
            dots: true,
            loop: false,
            nav: true,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 10
                }
            }
        })
    }
    
    
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
            loop: false,
            nav: false,
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

    $(".product-color").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        console.log($(this).attr("data-id"));
        $(this).parents(".product-group").find(`.product-img a img[data-id=${$(this).attr("data-id")}]`).removeClass("hide-img");
        $(this).parents(".product-group").find(`.product-img a img[data-id=${$(this).attr("data-id")}]`).siblings().addClass("hide-img");
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
    

    // Customer corusel start
    if ($("#customer").length) {
        $('#customer .customer-testimonial .owl-carousel').owlCarousel({
            dots: true,
            loop: false,
            nav: true,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }
    
    // News corusel start
    if ($("#news").length) {
        $('#news .news-content .owl-carousel').owlCarousel({
            margin: 30,
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
                    items: 3
                }
            }
        })
    }
    $( ".slider .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
    $( ".slider .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');


    // Brand corusel start
    if ($("#brand").length) {
        $('#brand .owl-carousel').owlCarousel({
            margin: 30,
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
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        })
    }
    $( ".slider .owl-carousel .owl-prev").html('<i class="fas fa-angle-left"></i>');
    $( ".slider .owl-carousel .owl-next").html('<i class="fas fa-angle-right"></i>');

    
})

