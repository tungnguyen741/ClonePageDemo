 
$(function() {

    var doCaoScreen = $(window).height();
    $('.bg_screen').css("height", doCaoScreen);
    //lấy độ cao của màn hình
    $(window).scroll(function() {
        var viTri = $(document).scrollTop();
        if (viTri > 200) {
            $('.navbar').addClass('menu_2');
        } else if (viTri < 200) {
            $('.navbar').removeClass('menu_2');
        }
    });
    $('.img_1').animate({
        top: '-90px',
        left: '-260px',
    }, 100);
    $('.img_1').css('transform', 'rotate(' + -7 + 'deg)');
    $('.img_2').animate({
        top: '-150px',
        right: '-25px',
    }, 100);
    $('.img_2').css('transform', 'rotate(' + 375 + 'deg)');
    $('.img_2').css('transform-origin', 'bottom');
    $('.img_3').animate({
        top: '350px',
        left: '-400px',
    }, 100);
    $('.img_4').animate({
        top: '500px',
        left: "100px"
    }, 600);
    $('.img_4').css('transform', 'rotate(' + -10 + 'deg)');
    $('.img_5').animate({
        top: '585px',
    }, 1700);
    $('.img_6').animate({
        bottom: "200px",
        left: '350px'
    }, 100);
    $('.img_6').css('transform', 'rotate(' + -51 + 'deg)');
    $('.img_7').animate({
        bottom: "170px",
        left: '455px'
    }, 100);
    $('.img_7').css('transform', 'rotate(' + 35 + 'deg)');
    $('.img_8').animate({
        bottom: "50px",
        right: '100px'
    }, 100);
    $('.img_8').css('transform', 'rotate(' + 15 + 'deg)');
    $('.img_9').animate({
        bottom: "-150px",
        right: '-490px'
    }, 100);
    $('.img_9').css('transform', 'rotate(' + 0 + 'deg)');
    // end hinh
    //   com3 animation
    $(window).scroll(function() {
        var viTri = $(document).scrollTop();
        if (viTri > 500) {
            $('.com3_icon1').addClass('com3_icon1_app');
            $('.com3_icon2').addClass('com3_icon2_app');
            $('.com3_icon3').addClass('com3_icon3_app');
            $('.com3_icon4').addClass('com3_icon4_app');
            $('.com3_icon5').addClass('com3_icon5_app');
            $('.com3_icon6').addClass('com3_icon6_app');
        } else if (viTri < 500) {
            $('.com3_icon1').removeClass('com3_icon1_app');
            $('.com3_icon2').removeClass('com3_icon2_app');
            $('.com3_icon3').removeClass('com3_icon3_app');
            $('.com3_icon4').removeClass('com3_icon4_app');
            $('.com3_icon5').removeClass('com3_icon5_app');
            $('.com3_icon6').removeClass('com3_icon6_app');
        }
    });
    // com6 animation
    $(window).scroll(function() {
        var viTri = $(document).scrollTop();
        if (viTri > 2600) {
            $('.com6_img1_ani').addClass('com6_img1_app');
            $('.com6_img2_ani').addClass('com6_img2_app');
            $('.com6_img3_ani').addClass('com6_img3_app');
            $('.com6_img4_ani').addClass('com6_img4_app');
            $('.com6_img5_ani').addClass('com6_img5_app');
            $('.com6_img6_ani').addClass('com6_img6_app');
            $('.com6_img7_ani').addClass('com6_img7_app');
        } else if (viTri < 2600) {
            $('.com6_img1_ani').removeClass('com6_img1_app');
            $('.com6_img2_ani').removeClass('com6_img2_app');
            $('.com6_img3_ani').removeClass('com6_img3_app');
            $('.com6_img4_ani').removeClass('com6_img4_app');
            $('.com6_img5_ani').removeClass('com6_img5_app');
            $('.com6_img6_ani').removeClass('com6_img6_app');
            $('.com6_img7_ani').removeClass('com6_img7_app');
        }
    });
    // com9 animation scroll
    $(window).scroll(function() {
        var viTri = $(document).scrollTop();
        if (viTri > 4341) {
            $('.com9_box1_ani').addClass('com9_box1_app');
            $('.com9_box2_ani').addClass('com9_box2_app');
            $('.com9_box3_ani').addClass('com9_box3_app');
            $('.com9_box4_ani').addClass('com9_box4_app');
        } else if (viTri < 4341) {
            $('.com9_box1_ani').removeClass('com9_box1_app');
            $('.com9_box2_ani').removeClass('com9_box2_app');
            $('.com9_box3_ani').removeClass('com9_box3_app');
            $('.com9_box4_ani').removeClass('com9_box4_app');
        }
    });
    // animation h1 title
 
});
 
 
