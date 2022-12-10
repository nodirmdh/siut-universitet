function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

$(function () {
  // AOS
  AOS.init({
    once: true,
    duration: 1000,
    offset: 0,
  });

  $(window).on("resize load", function () {
    AOS.refreshHard();
  });

  $(window).on("scroll load", function () {
    AOS.refresh();
  });
  // eof

  /*loadSvg*/
  $("[data-svg]").each(function () {
    var $this = $(this);
    var $svg = $this.data("svg");
    var $filename = $svg.split("\\").pop().split("/").pop().replace(".svg", "");

    $this.load($svg, function (responseTxt, statusTxt) {
      if (statusTxt == "success") {
        $this.find("svg").addClass("svg svg-" + $filename + "");
      }
    });

    waitForElm(".partners__map svg").then((item) => {
      let map = $(this).find("path");
      map.each(function (index, el) {
        el.id = "partners__map__" + index;
      });

      //Add class for map
      $("#partners__map__976").addClass("rus");
      $("#partners__map__1115").addClass("chin");
      $("#partners__map__356").addClass("japan");
      $("#partners__map__363").addClass("japan");
      $("#partners__map__353").addClass("japan");
      $("#partners__map__819").addClass("eng");
      $("#partners__map__844").addClass("eng");
      $("#partners__map__2002").addClass("usa");
      $("#partners__map__1553").addClass("korea");
      // $('#partners__map__1811').addClass('uzbek');
      $("#partners__map__461").addClass("avst");
      $("#partners__map__853").addClass("afrc");
      $("#partners__map__1091").addClass("india");
      //Rus
      $(".partners__map__wrapper .rus").on("mouseover", function () {
        $(".partners__map__wrapper .rus").css("fill", "#A3ADC9");
        $(".partners__countries_info.rus .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.rus .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
        $(".partners__countries_info.rus img").css("z-index", "2");
        $(".partners__countries_info.rus .partners__countries_info-text").css(
          "z-index",
          "1"
        );
      });
      $(".partners__map__wrapper .rus").on("mouseleave", function () {
        $(".partners__map__wrapper .rus").css("fill", "#DCE0EC");
        $(".partners__countries_info.rus .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.rus .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
        $(".partners__countries_info.rus img").css("z-index", "0");
        $(".partners__countries_info.rus .partners__countries_info-text").css(
          "z-index",
          "0"
        );
      });

      //China

      $(".partners__map__wrapper .chin").on("mouseover", function () {
        $(".partners__map__wrapper .chin").css("fill", "#A3ADC9");
        $(".partners__countries_info.chin .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.chin img").css("z-index", "2");
        $(".partners__countries_info.chin .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.chin .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .chin").on("mouseleave", function () {
        $(".partners__map__wrapper .chin").css("fill", "#DCE0EC");
        $(".partners__countries_info.chin .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.chin img").css("z-index", "0");
        $(".partners__countries_info.chin .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.chin .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //Japan

      $(".partners__map__wrapper .japan").on("mouseover", function () {
        $(".partners__map__wrapper .japan").css("fill", "#A3ADC9");
        $(".partners__countries_info.japan .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.japan img").css("z-index", "2");
        $(".partners__countries_info.japan .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.japan .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .japan").on("mouseleave", function () {
        $(".partners__map__wrapper .japan").css("fill", "#DCE0EC");
        $(".partners__countries_info.japan .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.japan img").css("z-index", "0");
        $(".partners__countries_info.japan .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.japan .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //Eng

      $(".partners__map__wrapper .eng").on("mouseover", function () {
        $(".partners__map__wrapper .eng").css("fill", "#A3ADC9");
        $(".partners__countries_info.eng .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.eng img").css("z-index", "2");
        $(".partners__countries_info.eng .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.eng .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .eng").on("mouseleave", function () {
        $(".partners__map__wrapper .eng").css("fill", "#DCE0EC");
        $(".partners__countries_info.eng .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.eng img").css("z-index", "0");
        $(".partners__countries_info.eng .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.eng .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //USA

      $(".partners__map__wrapper .usa").on("mouseover", function () {
        $(".partners__map__wrapper .usa").css("fill", "#A3ADC9");
        $(".partners__countries_info.usa .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.usa img").css("z-index", "2");
        $(".partners__countries_info.usa .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.usa .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .usa").on("mouseleave", function () {
        $(".partners__map__wrapper .usa").css("fill", "#DCE0EC");
        $(".partners__countries_info.usa .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.usa img").css("z-index", "0");
        $(".partners__countries_info.usa .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.usa .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //Korea

      $(".partners__map__wrapper .korea").on("mouseover", function () {
        $(".partners__map__wrapper .korea").css("fill", "#A3ADC9");
        $(".partners__countries_info.korea .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.korea img").css("z-index", "2");
        $(".partners__countries_info.korea .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.korea .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .korea").on("mouseleave", function () {
        $(".partners__map__wrapper .korea").css("fill", "#DCE0EC");
        $(".partners__countries_info.korea .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.korea img").css("z-index", "0");
        $(".partners__countries_info.korea .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.korea .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //Uzbek

      $(".partners__map__wrapper .uzbek").on("mouseover", function () {
        $(".partners__map__wrapper .uzbek").css("fill", "#A3ADC9");
        $(".partners__countries_info.uzbek .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.uzbek img").css("z-index", "2");
        $(".partners__countries_info.uzbek .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.uzbek .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .uzbek").on("mouseleave", function () {
        $(".partners__map__wrapper .uzbek").css("fill", "#DCE0EC");
        $(".partners__countries_info.uzbek .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.uzbek img").css("z-index", "0");
        $(".partners__countries_info.uzbek .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.uzbek .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //Avst

      $(".partners__map__wrapper .avst").on("mouseover", function () {
        $(".partners__map__wrapper .avst").css("fill", "#A3ADC9");
        $(".partners__countries_info.avst .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.avst img").css("z-index", "2");
        $(".partners__countries_info.avst .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.avst .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .avst").on("mouseleave", function () {
        $(".partners__map__wrapper .avst").css("fill", "#DCE0EC");
        $(".partners__countries_info.avst .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.avst img").css("z-index", "0");
        $(".partners__countries_info.avst .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.avst .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //Africa

      $(".partners__map__wrapper .afrc").on("mouseover", function () {
        $(".partners__map__wrapper .afrc").css("fill", "#A3ADC9");
        $(".partners__countries_info.afrc .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.afrc img").css("z-index", "2");
        $(".partners__countries_info.afrc .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.afrc .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .afrc").on("mouseleave", function () {
        $(".partners__map__wrapper .afrc").css("fill", "#DCE0EC");
        $(".partners__countries_info.afrc .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.afrc img").css("z-index", "0");
        $(".partners__countries_info.afrc .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.afrc .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });

      //India

      $(".partners__map__wrapper .india").on("mouseover", function () {
        $(".partners__map__wrapper .india").css("fill", "#A3ADC9");
        $(".partners__countries_info.india .partners__countries_info-text").css(
          "opacity",
          "1"
        );
        $(".partners__countries_info.india img").css("z-index", "2");
        $(".partners__countries_info.india .partners__countries_info-text").css(
          "z-index",
          "1"
        );
        $(".partners__countries_info.india .partners__countries_info-text").css(
          "visibility",
          "visible"
        );
      });
      $(".partners__map__wrapper .india").on("mouseleave", function () {
        $(".partners__map__wrapper .india").css("fill", "#DCE0EC");
        $(".partners__countries_info.india .partners__countries_info-text").css(
          "opacity",
          "0"
        );
        $(".partners__countries_info.india img").css("z-index", "0");
        $(".partners__countries_info.india .partners__countries_info-text").css(
          "z-index",
          "0"
        );
        $(".partners__countries_info.india .partners__countries_info-text").css(
          "visibility",
          "hidden"
        );
      });
    });
  });

  $(".magnific-popup").magnificPopup({
    fixedContentPos: false,
    callbacks: {
      open: function () {
        $("body").addClass("scroll_disabled");
      },
      close: function () {
        $("body").removeClass("scroll_disabled");
      },
    },
  });

  // $(function () {
  //     $('.popup-modal').magnificPopup({
  //         type: 'inline',
  //         modal: true,
  //         callbacks: {
  //             open: function () {
  //                 $('body').addClass('scroll_disabled')
  //             },
  //             close: function () {
  //                 $('body').removeClass('scroll_disabled')
  //             },
  //         },
  //     });
  //     $('.popup-gallery').magnificPopup({
  //         delegate: 'a',
  //         type: 'image',
  //         tLoading: 'Loading image #%curr%...',
  //         mainClass: 'mfp-img-mobile',
  //         gallery: {
  //             enabled: true,
  //             navigateByImgClick: true,
  //             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  //         },
  //         callbacks: {
  //             open: function () {
  //                 $('body').addClass('scroll_disabled')
  //             },
  //             close: function () {
  //                 $('body').removeClass('scroll_disabled')
  //             },
  //         },
  //         image: {
  //             markup: '<div class="mfp-figure mfp-figure-costumer">' +
  //                 '<div class="mfp-close"></div>' +
  //                 '<div class="mfp-img"></div>' +
  //                 '</div>',
  //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

  //         }
  //     });
  // });

  let header = $(".header");
  let hederHeight = header.height(); // РІС‹С‡РёСЃР»СЏРµРј РІС‹СЃРѕС‚Сѓ С€Р°РїРєРё

  /*     $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                header.addClass('header_fixed')
                $('body').css({
                    paddingTop: hederHeight + 'px', // РґРµР»Р°РµРј РѕС‚СЃС‚СѓРї Сѓ body, СЂР°РІРЅС‹Р№ РІС‹СЃРѕС‚Рµ С€Р°РїРєРё
                })
            } else {
                header.removeClass('header_fixed')
                $('body').css({
                    paddingTop: 0, // СѓРґР°Р»СЏСЋ РѕС‚СЃС‚СѓРї Сѓ body, СЂР°РІРЅС‹Р№ РІС‹СЃРѕС‚Рµ С€Р°РїРєРё
                })
            }
        }) */

  function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
  ibg();

  if ($(window).width() < 992) {
    $(".hamburger-menu__dropdown-heading").on("click", function () {
      $(this).toggleClass("active").next().slideToggle();
      $(".hamburger-menu__dropdown-heading")
        .not(this)
        .removeClass("active")
        .next()
        .slideUp();
    });
  }
  $(window).on("load resize", function () {
    if ($(window).width() < 992) {
      const swiper3 = new Swiper(".benefits__slider", {
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

        calculateHeight: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  });
  const swiper = new Swiper(".main__slider", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".reght-buttons__button-next",
      prevEl: ".reght-buttons__button-prev",
    },
    calculateHeight: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  const chart = document.querySelector(".reght-buttons__button-next svg"),
    start = Date.now();

  let timer = setInterval(() => {
    let timePassed = Date.now() - start;

    if (timePassed >= 2500) {
      clearInterval(timer);
      return;
    }

    circle(timePassed);
  }, 50);

  function circle(timePassed) {
    chart.style.setProperty("--p", `${timePassed / 50}`);
  }
  const team = new Swiper(".team__slider", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".reght-buttons__button-next",
      prevEl: ".reght-buttons__button-prev",
    },
  });

  const news = new Swiper(".presscenter__slider", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    navigation: {
      nextEl: ".reght-buttons__button-next",
      prevEl: ".reght-buttons__button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  $(function () {
    var tab = $("#tabs .tabs-items > div");
    tab.hide().filter(":first").show();

    // РљР»РёРєРё РїРѕ РІРєР»Р°РґРєР°Рј.
    $("#tabs .tabs-nav a")
      .click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $("#tabs .tabs-nav a").removeClass("tab-active");
        $(this).addClass("tab-active");
        return false;
      })
      .filter(":first")
      .click();

    // РљР»РёРєРё РїРѕ СЏРєРѕСЂРЅС‹Рј СЃСЃС‹Р»РєР°Рј.
    $(".tabs-target").click(function () {
      $("#tabs .tabs-nav a[href=" + $(this).attr("href") + "]").click();
    });

    // РћС‚СЂС‹С‚РёРµ РІРєР»Р°РґРєРё РёР· С…РµС€Р° URL
    if (window.location.hash) {
      $('#tabs-nav a[href="' + window.location.hash + '"]').click();
      window.scrollTo(0, $("#".window.location.hash).offset().top);
    }
  });

  $(".menu__icon, .hamburger-menu__close").on("click", function () {
    $(".hamburger-menu").fadeToggle();
    $("body").toggleClass("scroll_disabled");
  });
});

$(".labgvidg-header__text").on("click", function () {
  $(this).toggleClass("active").next().slideToggle();
});

/* $(document).mouseup(function(e) {
    let container = $(".labgvidg-header__dropdown");
    if (container.has(e.target).length === 0) {
        container.slideUp();
        $('.labgvidg-header__text').removeClass('active');
    }
}); */

$(document).mouseup(function (e) {
  let lang = $(".labgvidg-header__text");
  let aboutchilds = $(".about_link");
  let presschilds = $(".press_link");
  if (
    e.target != lang[0] &&
    !lang.has(e.target).length &&
    lang.hasClass("active")
  ) {
    $(".labgvidg-header__dropdown").slideUp();
    lang.removeClass("active");
  }
  if (
    e.target != aboutchilds[0] &&
    !aboutchilds.has(e.target).length &&
    aboutchilds.hasClass("active")
  ) {
    $(aboutchilds).removeClass("active").find(".childs").slideUp();
  }
  if (
    e.target != presschilds[0] &&
    !presschilds.has(e.target).length &&
    presschilds.hasClass("active")
  ) {
    $(presschilds).removeClass("active").find(".childs").slideUp();
  }
});

$('.has-childs .has-childs__wrapper').on('click', function () {

    $(this).parent().toggleClass('active').find('.childs').slideToggle()
})

// $( "div.enterleave" )
//   .mouseenter(function() {
//     n += 1;
//     $( this ).find( "span" ).text( "mouse enter x " + n );
//   })
//   .mouseleave(function() {
//     $( this ).find( "span" ).text( "mouse leave" );
//   });
/* $('.institutTabs__nav-link').on('click', function() {
    $(this).parent().find('.tab-active').removeClass('tab-active');
    $(this).toggleClass('tab-active');
})
 */

$(function () {
  var tab = $(".programs__lists > div");
  tab.hide().filter(":first").show();

  // РљР»РёРєРё РїРѕ РІРєР»Р°РґРєР°Рј.
  $(".programs__buttons a")
    .click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $(".programs__buttons a").removeClass("btn-active");
      $(this).addClass("btn-active");
      return false;
    })
    .filter(":first")
    .click();

  // РћС‚СЂС‹С‚РёРµ РІРєР»Р°РґРєРё РёР· С…РµС€Р° URL
  if (window.location.hash) {
    $('.programs__buttons a[href="' + window.location.hash + '"]').click();
    window.scrollTo(0, $("#".window.location.hash).offset().top);
  }
});

$(".top-header__colour-heading").on("click", function () {
  $(".top-header__colour-dropdown").slideToggle();
});

$(document).mouseup(function (e) {
  let container = $(".top-header__colour-dropdown");
  if (container.has(e.target).length === 0) {
    container.slideUp();
  }
});

/* $(document).mouseup(function(e) {
    let container = $(".labgvidg-header__dropdown");
    if (container.has(e.target).length === 0) {
        container.slideUp();
        $('.labgvidg-header__text').removeClass('active');
    }
}); */

$("body").on("click", ".link_move", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate(
    {
      scrollTop: top,
    },
    1500
  );
});

///
///
///

$(".custom-scroll").mCustomScrollbar();

if ($(window).width() < 992) {
  $(".custom-scroll").mCustomScrollbar("destroy");
  $(".custom-scroll").css("overflow-y", "auto");
}

$(".popup__list-item").hover(function () {
  $(this)
    .closest(".popup")
    .find(".popup__map-info")
    .hide()
    .eq($(this).index())
    .show();
});

// Cookie start

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Cookie ends

////РЎРєСЂРёРїС‚ РґР»СЏ СЃР»Р°Р±РѕРІРёРґСЏС‰РёС…////

$("input#colour__site-Off").on("click", function () {
  $("body").css("filter", "grayscale(100%) invert(100%)");
});
$("input#colour__site-On").on("click", function () {
  $("body").css("filter", "grayscale(0%)");
});

$("button#fontsSite-plus").on("click", function () {
  var zoom_site = $(this).css("zoom") / 1;
  var z = zoom_site + 0.1;
  $("button, a, p, h1, h2, h3, h4, h5, li, span").css("zoom", z);
});
$("button#fontsSite-minus").on("click", function () {
  var zoom_site = $(this).css("zoom");
  var z = zoom_site - 0.1;
  $("button, a, p, h1, h2, h3, h4, h5, li, span").css("zoom", z);
});

$("button#fontsSite-normal").on("click", function () {
  $("button, a, p, h1, h2, h3, h4, h5, li, span").css("zoom", 1);
});

var voice = getCookie("voice");
if (voice == "yes") {
  $("button#siteVoice").removeClass("filter-none");
} else {
  $("button#siteVoice").addClass("filter-none");
}
$("button#siteVoice").on("click", function () {
  var clases = $("button#siteVoice").attr("class");
  if (clases.indexOf("filter-none") > 0) {
    $("button#siteVoice").removeClass("filter-none");
    setCookie("voice", "yes");
    location.reload();
  } else {
    $("button#siteVoice").addClass("filter-none");
    setCookie("voice", "not");
    location.reload();
  }
});

$("a").on("mouseenter", function () {
  if (voice == "yes") {
    var text = $(this).text();
    var range = String(text);
    responsiveVoice.setDefaultVoice("Russian Female");
    responsiveVoice.speak(range);
  }
});

$("p").on("mouseenter", function () {
  if (voice == "yes") {
    var text = $(this).text();
    var range = String(text);
    responsiveVoice.setDefaultVoice("Russian Female");
    responsiveVoice.speak(range);
  }
});
$("body").on("mouseup", function (e) {
  if (voice == "yes") {
    var selectedText = window.getSelection().toString();
    responsiveVoice.setDefaultVoice("Russian Female");
    responsiveVoice.speak(selectedText);
  }
});

var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginBottom = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginBottom = "20px";
    }
  });
}

jQuery(($) => {
  $(".select").on("click", ".select__head", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().fadeOut();
    } else {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
      $(this).addClass("open");
      $(this).next().fadeIn();
    }
  });

  $(".select").on("click", ".select__item", function () {
    $(".select__head").removeClass("open");
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".select").length) {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
    }
  });
});

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
jQuery(document).ready(function ($) {
  (function ($) {
    $(function () {
      $(".calc__wrapper_row input, .calc__wrapper_row select").styler();
    });
  })(jQuery);
});

let header = $(".header");
let hederHeight = header.height(); // РІС‹С‡РёСЃР»СЏРµРј РІС‹СЃРѕС‚Сѓ С€Р°РїРєРё

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    header.addClass("header_fixed");
    $("body").css({
      paddingTop: hederHeight + "px", // РґРµР»Р°РµРј РѕС‚СЃС‚СѓРї Сѓ body, СЂР°РІРЅС‹Р№ РІС‹СЃРѕС‚Рµ С€Р°РїРєРё
    });
  } else {
    header.removeClass("header_fixed");
    $("body").css({
      paddingTop: 0, // СѓРґР°Р»СЏСЋ РѕС‚СЃС‚СѓРї Сѓ body, СЂР°РІРЅС‹Р№ РІС‹СЃРѕС‚Рµ С€Р°РїРєРё
    });
  }
});

$(".mainBlock").css({
  marginTop: "-" + hederHeight + "px", // РґРµР»Р°РµРј РѕС‚СЃС‚СѓРї Сѓ body, СЂР°РІРЅС‹Р№ РІС‹СЃРѕС‚Рµ С€Р°РїРєРё
});

$(window).on("resize", function () {
  if ($(window).width() < 992) {
    $(function () {
      const e = $(".idea__text").find("p"),
        h = $(".more_info");

      h.on("click", function () {
        e.css("max-height", "100%");
        h.hide();
      });
    });
  }
});

if ($(window).width() < 992) {
  $(function () {
    const e = $(".idea__text").find("p"),
      h = $(".more_info");

    h.on("click", function () {
      e.css("max-height", "100%");
      h.hide();
    });
  });
}
