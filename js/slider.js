
const contentSetting = {
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: false,
    dots: true,
    // responsive: [{
    //     breakpoint: 920,
    //     settings: "unslick"
    // }]
}

const benefitsSetting = {
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: false,
    dots: true,
    // responsive: [{
    //     breakpoint: 920,
    //     settings: "unslick"
    // }]
}

const newsSetting = {
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: false,
    dots: true,
    // responsive: [{
    //     breakpoint: 920,
    //     settings: "unslick"
    // }]
};

const otherSetting = {
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: false,
    dots: true,
    // responsive: [{
    //     breakpoint: 920,
    //     settings: "unslick"
    // }]
};

$(() => {
    const win = $(window);
    const content = $('.content-prerequisites-inner-list');
    const benefits = $('.benefits__list');
    const news = $('.news-about-other-block');
    const other = $('.other-block');

    win.on("load resize", () => {
      if (win.width() < 950) {
          content.not(".slick-initialized").slick(contentSetting);
          benefits.not(".slick-initialized").slick(benefitsSetting);
          news.not(".slick-initialized").slick(newsSetting);
          other.not(".slick-initialized").slick(otherSetting);
    } 
    else if (content.hasClass("slick-initialized")) {
        content.slick("unslick");
      }
    else if (benefits.hasClass("slick-initialized")) {
        benefits.slick("unslick");
      }
    else if (news.hasClass("slick-initialized")) {
        news.slick("unslick");
      }
    else if (other.hasClass("slick-initialized")) {
        other.slick("unslick");
      }
    });
  });


$('.admission-documents-inner-list').slick({
    nextArrow: false,
    prevArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    infinite: false,
    dots: true,
    responsive: [{
        breakpoint: 950,
        // settings: "unslick"
        settings: { 
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
            vertical: true,
            prevArrow: $('.admission-dots-prev'),
            nextArrow: $('.admission-dots-next'),
          }
    }]
});
