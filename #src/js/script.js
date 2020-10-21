$(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    touchMove: false,
    draggable: false,
    prevArrow: '<button type = "button" class = "slick-prev"></button>',
    nextArrow: '<button type = "button" class = "slick-next"></button>'
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 45,
    to: 250,
    prefix: "$",
    min_interval: null,
    max_interval: null,
    skin: "round"
  });
});
