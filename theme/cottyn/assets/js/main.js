(function($) {
var windowWidth = $(window).width();
var windowWidth_1920 = $('.page-body-cntlr').width();

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});

if( $('.hamburger-icon').length ){
  $('.hamburger-icon').click(function(){
    $('body').toggleClass('allWork');
  });
}
if(windowWidth <=767){
    if( $('ul > li.menu-item-has-children').length ){
      $('ul > li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
     });
    }
}
	
if($("ul.slick-dots li").length == 1){
   $("ul.slick-dots").hide();
}
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};
$(window).load(function() {
//matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };
  if($('.mHc6').length){
    $('.mHc6').matchHeight();
  };
});

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


var swiper = new Swiper('.catagorySlider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.catagorySlider-arrows .swiper-button-next',
      prevEl: '.catagorySlider-arrows .swiper-button-prev',
    },
    breakpoints: {
       639: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1199: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1920: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }
  });

if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        //icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


/* innerpage buttons */
$(".dft-fl-btn" ).each(function( index ) {
  var color = $(this).data('color');
  var bg = $(this).data('bg');
  var border = $(this).data('border');
  $(this).css('color', color);
  $(this).css('background', bg);
  $(this).css('border-color', border);
  $(this).on('mouseenter', function(){
    if( bg != ''){
      $(this).css('background', 'transparent');
      $(this).css('color', bg);
    }
    if( bg == ''){
      $(this).css('background', border);
      $(this).css('color', '#fff');
    }
  });
  $(this).on('mouseleave', function(){
    if( bg != ''){
      $(this).css('background', bg);
      $(this).css('color', color);
    }
    if( bg == ''){
      $(this).css('background', 'transparent');
      $(this).css('color', border);
    }
  });
});



/* start of Noyon*/
if( $('.field-fag').length ){
  $('.field-faq-accordion-hdr').on('click', function(){
    $(this).toggleClass('active');
    $(this).parents('.field-fag ul li').siblings().find('.field-faq-accordion-hdr').removeClass('active');
    $(this).parents('.field-fag ul li').find('.field-faq-accordion-desc').slideToggle(300);
    $(this).parents('.field-fag ul li').siblings().find('.field-faq-accordion-desc').slideUp(300);
  });
}



/* start of Kashob*/

if( $('.contact-form-wrp').length ){
  $('.contact-form-wrp .wpforms-container .wpforms-form .wpforms-submit-container button').on('click', function(){
    $('.wpforms-field input[required],.wpforms-field select[required]').parents('.wpforms-field').addClass('wpforms-has-error');
    $('.wpforms-field input[required],.wpforms-field select[required]').addClass('wpforms-error');
  });
}


if( $('.wpforms-error').length ){
  $('.wpforms-error').on('click', function(){
    $(this).parents('.wpforms-field').removeClass('wpforms-has-error');
  });
}

// if( $('.offerte-form-wrp').length ){
//   $('.offerte-form-wrp .wpforms-container .wpforms-form .wpforms-submit-container button').on('click', function(){
//     $('.wpforms-field input[required],.wpforms-field select[required]').parents('.wpforms-field').addClass('wpforms-has-error');
//     $('.wpforms-field input[required],.wpforms-field select[required]').addClass('wpforms-error');
//   });
// }


// if( $('.wpforms-error').length ){
//   $('.wpforms-error').on('click', function(){
//     $(this).parents('.wpforms-field').removeClass('wpforms-has-error');
//   });
// }
if(windowWidth > 575){
  if( $('.gallery-masonry-items-cntlr').length ){
    $('.gallery-masonry-items-cntlr').masonry({
      // options
      itemSelector: '.gallery-masonry-item',
    }).masonry('layout');
  };
}

if(windowWidth <= 575){
  if( $('.BtmGallerySlider').length ){
    $('.BtmGallerySlider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
}
  

/* start of Momin*/




/* start of Jahir*/
if( $('.xs-page-entry-menu').length ){
  $('.xs-page-entry-menu ul li a').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parents('.xs-page-entry-menu').find('.xs-page-entry-menu ul li').removeClass('active');
    $(this).next().slideToggle(300);
  });
}

/* start of Shariful*/

  function bannerheight(){
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var headerHeight = $('.header').height();
      var bannerheight = (windowHeight - headerHeight);
      var windowHeight2 = 0;
      if( windowHeight > 625 ){
        windowHeight2 = 625;
      }else{
        windowHeight2 = bannerheight;
      }
      if (windowWidth > 767){
        $('.hm-banner').css('height', bannerheight);
      }
    }
    bannerheight();
    $(window).resize(function(){
      bannerheight();
    });
  
  if( $('.hmBnrSlider').length ){
    $('.hmBnrSlider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          }
        ]
    });
  }


  if( $('.clubsTeamSlider').length ){
    $('.clubsTeamSlider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.clubs-team-sec .fl-prev-next .fl-prev'),
      nextArrow: $('.clubs-team-sec .fl-prev-next .fl-next'),
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint:576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });
  }

  //Masonry
    if( $('.msnry-grd').length ){
      $('.msnry-grd').masonry({
        // options
        itemSelector: '.msnry-grd-item',
      }).masonry('layout');
    };


    /*var windowWidth_1920 = $('.page-body-cntlr').width();*/
    var containerwidth = $('.container').width();
    var offSet = (windowWidth_1920 - containerwidth);
    var lftOffSet = (offSet / 2);

    $('.customer-service-slider-ctlr').css('padding-left', lftOffSet);

    $(window).resize(function(){
      var windowWidth_1920 = $('.page-body-cntlr').width();
      var containerwidth = $('.container').width();
      var offSet = (windowWidth_1920 - containerwidth);
      var lftOffSet = (offSet / 2);

      $('.customer-service-slider-ctlr').css('padding-left', lftOffSet);
    });

    if( $('.customerServiceSlider').length ){
      $('.customerServiceSlider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.customer-service-sec .fl-prev-next .fl-prev'),
        nextArrow: $('.customer-service-sec .fl-prev-next .fl-next'),
      });
    }



    /* start of niaz*/


  if( $('.clubCollectionSlider').length ){
      $('.clubCollectionSlider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint:576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      });
  }
 if (windowWidth <= 640) {
  if( $('.teamSlider').length ){
      $('.teamSlider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint:576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      });
  }
}
if (windowWidth <= 991) {
    $('.ftr-top-col h6').on('click', function(){
      $(this).toggleClass('active');
      $(this).parent().siblings().find('h6').removeClass('active');
      $(this).parent().find('.ftr-col-menu').slideToggle(300);
      $(this).parent().siblings().find('.ftr-col-menu').slideUp(300);
      $(this).parent().find('.ftr-col-desc').slideToggle(300);
      $(this).parent().siblings().find('.ftr-col-desc').slideUp(300);
    });

}
  if( $('.ourTeamSlider').length ){
    $('.ourTeamSlider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint:480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });
  }
    if( $('.newsSlider').length ){
    $('.newsSlider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint:480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });
  }
      if( $('.exprtSlider').length ){
    $('.exprtSlider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint:480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });
  }
if( $('.blockquoteSlider').length ){
    $('.blockquoteSlider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.blockquote-arrow .fl-prev-next .fl-prev'),
      nextArrow: $('.blockquote-arrow .fl-prev-next .fl-next'),
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint:480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });
  }
new WOW().init();

})(jQuery);