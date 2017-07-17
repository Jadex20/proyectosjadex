
var $header = $('.main-header');
var $headerTop = $header.offset().top;
var pegarHeader = function(){
    var $scrollTop = $(window).scrollTop();
    if($scrollTop >= $headerTop){
          $header.addClass('sticky');
    }else {
          $header.removeClass('sticky');
    }
};
/**/




$(window).on('scroll',pegarHeader);
(function(){

var search = document.getElementById("search");
search.addEventListener('click',function(){
      $search.addClass('position');
});

})();
