
$(document).ready(function () {
  $(".burger_icon").on('click', function () {
    $("#menu").slideToggle();
    $("body").toggleClass("overflowbody")
    $(".burger_icon").toggleClass("openmenu")
  });


  var swiper = new Swiper(".notreSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true,
    navigation: {
      nextEl: ".notre-slider-wrapper .swiper-button-next",
      prevEl: ".notre-slider-wrapper .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });


  let SNCardSlider;
  $(window).on("load resize", function () {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      // $(".Rcard_wrapper").css("background-color", "gray");
      if (SNCardSlider?.destroyed === true || !SNCardSlider) {
        SNCardSlider = new Swiper(" .SelectNeuf-card-wrapper .SelectNeufSlder", {
          slidesPerView: 1,
          loop: true,
          pagination: {
            el: " .SelectNeuf-card-wrapper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".SelectNeuf-card-wrapper .swiper-button-next",
            prevEl: ".SelectNeuf-card-wrapper  .swiper-button-prev",
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
          }
        });
      }
    }
    else {
      if (SNCardSlider !== undefined) SNCardSlider.destroy(true, true);
    }
  });


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  /*-------- DropDown Toggle --------*/
  // $("#dropdown").on('mouseover', function () {
  //    $(".dropdown_content").slideToggle();
  //  });


  $('.accordion').find('.accordion__header').click(function () {
    // Adds active class
    $(this).toggleClass('is-active');
    // Expand or collapse this panel
    $(this).next().slideToggle();
    // // Hide the other panels
    $('.accordion__body').not($(this).next()).slideUp();
    // Removes active class from other titles
    $('.accordion__body').not($(this)).removeClass('is-active');
    $('.accordion__header').not($(this)).removeClass('is-active');
  });

  $('.mobile-accordion').find('.mobile-accordion__header').click(function () {
    // Adds active class
    $(this).toggleClass('is-active');
    // Expand or collapse this panel
    $(this).next().slideToggle();
    // // Hide the other panels
    $('.mobile-accordion__body').not($(this).next()).slideUp();
    // Removes active class from other titles
    $('.mobile-accordion__body').not($(this)).removeClass('is-active');
    $('.mobile-accordion__header').not($(this)).removeClass('is-active');
  });

  let bottomslider;
  $(window).on("load resize", function () {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      // $(".Rcard_wrapper").css("background-color", "gray");
      if (bottomslider?.destroyed === true || !bottomslider) {
        bottomslider = new Swiper(".bottom-col .bottomSlider", {
          slidesPerView: 1,
          loop: true,
          navigation: {
            nextEl: ".bottom-col  .swiper-button-next",
            prevEl: ".bottom-col  .swiper-button-prev",
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 30,

            },
            767: {
              slidesPerView: 1,
              spaceBetween: 30,

            },

          }
        });
      }
    }
    else {
      if (bottomslider !== undefined) bottomslider.destroy(true, true);
    }
  });

  var swiper = new Swiper(".genderslider", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".all-cards-wrapper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".all-cards-wrapper  .swiper-button-next",
      prevEl: ".all-cards-wrapper  .swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    }
  });


  // let importantslider;
  // $(window).on("load resize", function () {
  //   if (window.matchMedia("(max-width: 1024px)").matches) {
  //     // $(".Rcard_wrapper").css("background-color", "gray");
  //     if (importantslider?.destroyed === true || !importantslider) {
  //       importantslider = new Swiper(".important-slider-wrapper .importantSlider", {
  //         slidesPerView: 1,
  //         loop: true,
  //         navigation: {
  //           nextEl: ".important-slider-wrapper  .swiper-button-next",
  //           prevEl: ".important-slider-wrapper  .swiper-button-prev",
  //         },
  //         breakpoints: {
  //           480: {
  //             slidesPerView: 1,
  //             spaceBetween: 30,

  //           },
  //           767: {
  //             slidesPerView: 1,
  //             spaceBetween: 30,

  //           },
  //           920: {
  //             slidesPerView: 1,
  //             spaceBetween: 30,

  //           },

  //         }
  //       });
  //     }
  //   }
  //   else {
  //     if (importantslider !== undefined) importantslider.destroy(true, true);
  //   }
  // });

});



function close_notification() {
  document.getElementById("notification_wrapper").style.display = "none";
}
