$(document).ready(function () {
  // Initialize Slick Carousel for the testimonial slider
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three testimonials in one slide
    slidesToScroll: 1,
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});  