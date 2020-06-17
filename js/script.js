$(document).ready(function () {
    $('#slider').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }

        }]
    })
})


