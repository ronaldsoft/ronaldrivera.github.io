/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//auto autoresize funtion
//(function($,sr){
//  var debounce = function (func) {
//    return function debounced () {
//      var obj = this, args = arguments;
//      func.apply(obj, args);
//    };
//  };
//  $.fn[sr] = function(fn) {  
//    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); 
//  };
//})(jQuery,'autoresize');
jQuery(function ($) { 
    $(window).resize(function(e) {
      $('.content').height($(window).height());  
    });
    $(window).trigger('resize');   
  scrollsection('.section-1 .arrow','.section-2');
  scrollsection('.section-2 .arrow','.section-3');
  scrollsection('.section-3 .arrow','.section-4');
  scrollsection('.section-4 .arrow','.section-1');

  function scrollsection(sclick,sposition) {
    $(sclick).click(function (e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(sposition).offset().top  
      }, 1000);
    });    
  };
});
 