$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 5) {
	    $(".airnet-top-nav").css("background" , "#FFFFFF");
      $(".airnet-top-nav").css("border-bottom" , "2px solid #D65050");
      $(".navbar-nav > li > a").css("color" , "#000");
      $(".airnet-top-nav").css("padding" , "5px 0");
      $(".navbar-nav > li > a:focus, .navbar-nav > li > a:hover").css("color", "#D65050");
      $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#FFF");
      $("ul li:hover ul .dropdown-menu li").css("margin-bottom" , "2px #000"); 
      $("ul li:hover ul .dropdown-menu li").css("background-color" , "white");      
	  } else{
		  $(".airnet-top-nav").css("background" , "transparent");
      $(".airnet-top-nav").css("border-bottom" , "0px");
      $(".airnet-top-nav").css("padding" , "15px 0");
      $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#fff");
      $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("color" , "#000");
      $(".navbar-nav > li > a").css("color" , "#fff");
      $("ul li ul .dropdown-menu li").css("margin-bottom" , "2px #fff");
      $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("background-color" , "#000");
	  }
  });
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function() {
     $('#packges-box1').mouseover(function() {      
      $('#packges-1').css('background', '#D65050');
      });
     $('#packges-box1').mouseout(function() {      
      $('#packges-1').css('background', '#fafafa');
      });

     $('#packges-box2').mouseover(function() {      
      $('#packges-2').css('background', '#D65050');
      });
     $('#packges-box2').mouseout(function() {      
      $('#packges-2').css('background', '#fafafa');
      });

     $('#packges-box3').mouseover(function() {      
      $('#packges-3').css('background', '#D65050');
      });
     $('#packges-box3').mouseout(function() {      
      $('#packges-3').css('background', '#fafafa');
      });

     $('#packges-box4').mouseover(function() {      
      $('#packges-4').css('background', '#D65050');
      });
     $('#packges-box4').mouseout(function() {      
      $('#packges-4').css('background', '#fafafa');
      });

     $('#packges-box5').mouseover(function() {      
      $('#packges-5').css('background', '#D65050');
      });
     $('#packges-box5').mouseout(function() {      
      $('#packges-5').css('background', '#fafafa');
      });

     $('#packges-box6').mouseover(function() {      
      $('#packges-6').css('background', '#D65050');
      });
     $('#packges-box6').mouseout(function() {
      $('#packges-6').css('background', '#fafafa');
      });
  
  });
