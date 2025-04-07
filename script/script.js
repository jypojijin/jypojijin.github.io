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

    $(".cake2>ul>li>img").click(function () {
        $(this).css("scale", "2")
        $(this).css("position", "relative")
        $(this).css("z-index", "100")
    })
    $(".cake2>ul>li>img").mouseleave(function () {
        $(this).css("scale", "1")
        $(this).css("position", "relative")
        $(this).css("z-index", "1")
    })



    // 이미지를 변경하는 첫 번째 함수 (mouseover 이벤트용)
    function changeImage() {
        let imgElements = document.getElementsByClassName("cake3");
        for (let i = 0; i < imgElements.length; i++) {
            let img = imgElements[i];
            // 현재 이미지 src에서 파일명 추출
            let currentSrc = img.src.substring(img.src.lastIndexOf('/') + 1);

            // 현재 이미지가 'Asset 5.png'인 경우만 변경
            if (currentSrc === "Asset%205.png" || currentSrc === "Asset 5.png") {
                img.src = "images/cake/Asset 112.png";
            }
            // 다른 이미지들은 그대로 유지
        }
    }

    // 이미지를 변경하는 두 번째 함수 (click 이벤트용)
    function changeImage2() {
        let imgElements = document.getElementsByClassName("cake3");
        for (let i = 0; i < imgElements.length; i++) {
            let img = imgElements[i];
            // 현재 이미지 src에서 파일명 추출
            let currentSrc = img.src.substring(img.src.lastIndexOf('/') + 1);

            // 현재 이미지에 따라 다음 이미지로 변경
            if (currentSrc === "Asset%20112.png" || currentSrc === "Asset 112.png") {
                img.src = "images/cake/Asset 115.png";
            } else if (currentSrc === "Asset%20115.png" || currentSrc === "Asset 115.png") {
                img.src = "images/cake/Asset 5.png";
            }
            // Asset 5.png인 경우는 mouseover 이벤트에서 처리하므로 여기서는 처리하지 않음
        }
    }

    // mouseleave 이벤트용 함수 - 모든 이미지를 Asset 5.png로 되돌림
    function resetImage() {
        let imgElements = document.getElementsByClassName("cake3");
        for (let i = 0; i < imgElements.length; i++) {
            imgElements[i].src = "images/cake/Asset 5.png";
        }
    }

    // 이미지에 이벤트 리스너 추가
    var imgElements = document.getElementsByClassName("cake3");
    // 각 이미지에 이벤트 리스너를 추가
    for (let i = 0; i < imgElements.length; i++) {
        // mouseover 이벤트 처리
        imgElements[i].addEventListener("mouseover", changeImage);
        // click 이벤트 처리
        imgElements[i].addEventListener("click", changeImage2);
        // mouseleave 이벤트 처리 - 마우스가 벗어날 때 Asset 5로 돌아감
        imgElements[i].addEventListener("mouseleave", resetImage);
    }

    //     var project = document.querySelector('#project')
    //     project.addEventListener('mousemove', function (e) {
    //         var x = e.offsetX
    //         var y = e.offsetY
    //         var rotateY = -1/5 * x + 20
    //         var rotateX = 4/30 * y - 20
    //         project.style = 'transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)'
    //     })
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // document.querySelectorAll('.slide-container').forEach(container => {
    //     container.addEventListener('click', function() {
    //         this.classList.toggle('active');
    //     });
    // });

    $(".image-section").click(function () {
        $(".text-section").css("display", "block")   
    })
    $(".text-section").click(function () {
        $(".text-section").css("display", "none")   
    })
});
