/* Navbar active link---*/
$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
/*---Navbar active link */

/*Carousel faculdades--- */
//Owlcarousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        NavText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })
})
/* ---Carousel faculdades*/
