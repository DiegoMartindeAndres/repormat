$(document).ready(function(){

  $('.modal.print').addClass('visible');
  $('.page').on('click',()=>{
    $('.modal.print').addClass('visible');
  })
  $('#ocultar-modal').on('click',()=>{
    console.log('ocultando');
    $('.modal.print').removeClass('visible');
  });
  //$('.moda.print').on('click',()=>{$('.modal.print').toggleClass('visible');})
  var pages = $('.page')

  pages.each(function(index){
    $(this).find('.page-number').text(index + 1);
    $(this).find('.page-total').text(pages.length);
  });

});
