$(document).ready(function() {
  svg4everybody({});

  checkSize();
  $(window).resize(checkSize);

  $('.header__cross').hide();

  $('.header__hamburger').click(function() {
    $('.nav').slideToggle('slow', function() {
      $('.header__hamburger').hide();
      $('.header__cross').show();
    });
  });

  $('.header__cross').click(function() {
    $('.nav').slideToggle('slow', function() {
      $('.header__cross').hide();
      $('.header__hamburger').show();
    });
  });

  $('.main-carousel').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  });

  $('.sub-carousel').slick({
    variableWidth: true,
    slidesToShow: 3,
    dots: false,
    prevArrow: $('.sub-carousel__prev'),
    nextArrow: $('.sub-carousel__next'),
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  function checkSize() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.header__hamburger').show();
      $('.header__cross').hide();
      $('.nav').hide();
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      $('.header__hamburger').hide();
      $('.header__cross').hide();
      $('.nav').show();
    }
  }
});
