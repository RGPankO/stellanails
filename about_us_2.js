$(document).ready(function(){
  
  certificates_slider = $('.certificates-slider').slick({
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $('.slider-navigation .certificate-cta').click(function(){
      $('.certificates-slider').slick('slickGoTo',$(this).data('slide'));
      $('.slider-navigation .certificate-cta').removeClass('active');
      $(this).addClass('active');
    });

    certificates_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
          console.log(currentSlide);
          $('.slider-navigation .certificate-cta').removeClass('active');
          $('.slider-navigation .certificate-cta[data-slide|="'+currentSlide+'"]').addClass('active');
      });
});
