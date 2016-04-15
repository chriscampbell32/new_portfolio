$(document).ready(function(){
    //parallax effect
    $('.parallax').parallax();

    $('.scroll').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
  });
        