$(document).ready(() => {

  $('[data-sidemenu-toggle]').click(function() {
    $(this).toggleClass('is-active');
    $('#sidemenu').toggleClass('show');
    $('.container, footer').toggleClass('shrink');
  });

  $('.container').click(function() {
    if ( $(this).hasClass('shrink') ) {
      $(this).removeClass('shrink');
      $('#sidemenu').removeClass('show');
    }
  });

  // $('.cards .card-wrapper').click(function() {
  //   $(this)
  //     .parent()
  //     .find('.card-wrapper.active')
  //     .each(function() {
  //       $(this).removeClass('active');
  //     });

  //   $(this).addClass('active');
  // });

  $('.send').click(function() {
    if ( !$(this).hasClass('sending') ) {

      $(this).find('span').fadeOut(300);
      $(this).find('.paper-plane').fadeOut(300);

      setTimeout(() => {
        $(this).addClass('sending')
      }, 300);
      
      setTimeout(() => {
        $(this)
          .find('span').fadeIn(300)
          .text('Watch your mailbox!');
      }, 500);
    }
  });

  $('.cards').slick({
    slidesToShow: 3,
    appendArrows: $('.slider-controls'),
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '60px',
    prevArrow: 
      `
        <button type="button" class="slick-prev">
          <img src="assets/arrow-left.icon.svg">
        </button>
      `,
    nextArrow: 
      `
        <button type="button" class="slick-next">
          <img src="assets/arrow-right.icon.svg">
        </button>
      `,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            centerMode: true,
            // slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

});