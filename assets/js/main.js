$(document).ready(function () {


  $('.banner__slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: '<button class="banner__nav banner_prev-arrow"></button>',
    nextArrow: '<button class="banner__nav banner_next-arrow"></button>',
  });
  $('.banner__slides').on('afterChange', function (event, slick, currentSlide) {
    $('.bannerId').each(function (index, element) {
      if (index === currentSlide) {
        $(element).addClass('active__banner_id');

      }
      else {
        $(element).removeClass('active__banner_id');

      }
    })
    $('.bannerName').each(function (index, element) {
      if (index === currentSlide) {

        $(element).addClass('active__banner_name');
      }
      else {
        $(element).removeClass('active__banner_name');
      }
    })
  });




  $('.services__slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ],
    prevArrow: '<button class="common__nav prev-arrow"></button>',
    nextArrow: '<button class="common__nav next-arrow"></button>',
    customPaging: function (slider, i) {
      return '<div class="common__dots" id=' + i + ">  </div>";
    },
  });
  $('.projects__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    // variableWidth: true,
    prevArrow: '<button class="common__nav prev-arrow"></button>',
    nextArrow: '<button class="common__nav next-arrow">Next Project</button>',
  });

  $('.testimonial__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ],
    prevArrow: '<button class="common__nav prev-arrow"></button>',
    nextArrow: '<button class="common__nav next-arrow"></button>',
    customPaging: function (slider, i) {
      return '<div class="common__dots" id=' + i + ">  </div>";
    },
  });


  $('.shop__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ],
    prevArrow: '<button class="common__nav prev-arrow"></button>',
    nextArrow: '<button class="common__nav next-arrow"></button>',
    customPaging: function (slider, i) {
      return '<div class="common__dots" id=' + i + ">  </div>";
    },
  });

  $('.blog__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ],
    prevArrow: '<button class="common__nav prev-arrow"></button>',
    nextArrow: '<button class="common__nav next-arrow"></button>',
    customPaging: function (slider, i) {
      return '<div class="common__dots" id=' + i + ">  </div>";
    },
  });

  // -------------- Menu toggle
  const menuIcon = document.querySelector(".menu_icon")
  const menus = document.querySelector(".header__bottom_right")

  menuIcon.addEventListener("click", () => {
    menus.classList.toggle("active_menu")
  })


// -------------- Scroll top sticky header
const header = document.querySelector(".header")
const isSticky = (e) => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 35) {
        header.style.top='-50px';
        header.style.transition = "all 1s";

    }
    else {
      header.style.top='0px'
    }

};
window.addEventListener("scroll", isSticky);





});


