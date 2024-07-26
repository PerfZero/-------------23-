

$(function() {

    // HERO SECTION SCROLL

    var heroHeight = $('.hero').outerHeight();       
    
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        
        var newPaddingTop = heroHeight - scrollTop * 1.4;
        
        if (newPaddingTop < 0) {
            newPaddingTop = 0;
        }
        
        $('.main').css('padding-top', newPaddingTop + 'px');
        if (scrollTop >= 40) {
            $('.features .row').addClass('active');
        } else {
            $('.features .row').removeClass('active');
        }
    });


    // HOME PAGE CUSTOM HEADER

    var header = $('.header--home');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });


    // ABOUT PAGE STICKY MENU


    if($(".sticky").length) {
        const el = document.querySelector(".sticky");
        window.addEventListener("scroll", () => {
            const stickyTop = parseInt(window.getComputedStyle(el).top);
            const currentTop = el.getBoundingClientRect().top;
            el.classList.toggle("is-sticky", currentTop === stickyTop);
        });
    }
    

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    // SCROLL TO ANY SECTION

    $('.about-list a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        if($(window).width() > 1024) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 75
            }, 600, 'linear');
        }

        if($(window).width() < 1024) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 135
            }, 600, 'linear');
            
        }
    });

    // ACCORDION JQUERY

    $('.accordion > li:first-child').addClass('active').find('.accordion-hidden').show();

    $('.accordion > li > a').on('click', function(e) {
        e.preventDefault();

        const accordionItem = $(this).parent();
        const content = accordionItem.find('.accordion-hidden');

        accordionItem.toggleClass('active');
        content.slideToggle();

        accordionItem.siblings('.active').removeClass('active').find('.accordion-hidden').slideUp();
    });


    // IOS HEIGHT MOBILEMENU FIX

    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    window.addEventListener('resize', function() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    });

    // WAY SECTION TABS

    $('.way-nav__btn').hover(function() {
        var index = $(this).index();
        $('.way-images img, .way-tabs__item').removeClass('active');
        $('.way-images img').eq(index).addClass('active');
        $('.way-tabs__item').eq(index).addClass('active');

        var btnOffset = $(this).position().top;
        $('.way-nav__arrow').css('top', btnOffset + 3 + 'px');
    });

    $('.way-nav__box').mouseleave(function() {
        $('.way-images img, .way-tabs__item').removeClass('active');
        $('.way-images img').eq(0).addClass('active');
        $('.way-tabs__item').eq(0).addClass('active');

        $('.way-nav__arrow').css('top', '3px');
    });


    // SEND FORM

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $.fancybox.open({
            //   src  : '#modalThanks',
            //   type : 'inline',
            // });
            $("#form").trigger("reset");

        });
        return false;
    });

});