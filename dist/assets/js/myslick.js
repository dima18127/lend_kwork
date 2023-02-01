// console.log("work");
$(document).ready(function(){

    $('.slider').slick(
       
    {   
        adaptiveheight:true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1200,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true,
              }
            },]
    }
    

    );
  });
// $('.single-item').slick();