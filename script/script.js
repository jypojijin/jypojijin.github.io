$(function () {
    // $(document).ready(function() {
    // 스크롤 애니메이션
    // $(window).scroll(function() {
    //     $('.animate').each(function() {
    //         var topOfElement = $(this).offset().top;
    //         var bottomOfWindow = $(window).scrollTop() + $(window).height();
    //         if (bottomOfWindow > topOfElement) {
    //             $(this).css('opacity', '1');
    //         }
    //     });
    // });

    // // 슬라이더 기능
    // let currentSlide = 0;
    // const $slides = $('.slide');
    // const slideCount = $slides.length;

    // function showNextSlide() {
    //     currentSlide = (currentSlide + 1) % slideCount;
    //     $slides.css('transform', `translateX(-${currentSlide * 100}%)`);
    // }

    // setInterval(showNextSlide, 500); // 3초마다 슬라이드 전환

    // let now = 1

    // function slide1() {
    //     $(".slider").css("margin-left", "830px")
    //     now = 1
    // }

    // function slide2() {
    //     $(".slider").css("margin-left", "630px")
    //     now = 2
    // }

    // function slide3() {
    //     $(".slider").css("margin-left", "430px")
    //     now = 3
    // }

    // function slide4() {
    //     $(".slider").css("margin-left", "230px")
    //     now = 4
    // }

    // function slide5() {
    //     $(".slider").css("margin-left", "30px")
    //     now = 5
    // }

    // function slide6() {
    //     $(".slider").css("margin-left", "-170px")
    //     now = 6
    // }

    // function slide7() {
    //     $(".slider").css("margin-left", "-370px")
    //     now = 7
    // }

    // setInterval(function () {
    //     if (now == 1) {
    //         slide2()
    //     }
    //     else if (now == 2) {
    //         slide3()
    //     }
    //     else if (now == 3) {
    //         slide4()
    //     }
    //     else if (now == 4) {
    //         slide5()
    //     }
    //     else if (now == 5) {
    //         slide6()
    //     }
    //     else if (now ==   6) {
    //         slide7()
    //     }
    //     else {
    //         slide1()
    //     }

    // }, 1000);

    $('.btn1').click(function () {
        $('.modal1').css('display', 'block');
    })
    $('.modal1').click(function () {
        $('.modal1').css('display', 'none');
    })
    $('.btn2').click(function () {
        $('.modal2').css('display', 'block');
    })
    $('.modal2').click(function () {
        $('.modal2').css('display', 'none');
    })
    $('.btn3').click(function () {
        $('.modal3').css('display', 'block');
    })
    $('.modal3').click(function () {
        $('.modal3').css('display', 'none');
    })
    $('.btn4').click(function () {
        $('.modal4').css('display', 'block');
    })
    $('.modal4').click(function () {
        $('.modal4').css('display', 'none');
    })

});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault(); 
        var target = $(this.getAttribute('href')); 
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });
});

