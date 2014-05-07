var ajax_form = true;

$(document).ready(function () {
  var cbpAnimatedHeader = (function () {
    var docElem = document.documentElement,
      header = document.querySelector('.cbp-af-header'),
      didScroll = false,
      changeHeaderOn = 100;

    function init() {
      window.addEventListener('scroll', function (event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 0);
        }
      }, false);
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        classie.add(header, 'cbp-af-header-shrink');
      } else {
        classie.remove(header, 'cbp-af-header-shrink');
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  })();

  $('pre').text($('pre').html());

  var modal        = document.getElementById('modal'),
      modalContent = document.querySelector('.modal-content'),
      openModal    = document.querySelector('.js-open-modal'),
      closeModal   = document.querySelectorAll('.modal, .modal-close');

  openModal.addEventListener('click', function() {
    modal.classList.add('is-visible');
  });

  [].forEach.call(closeModal, function (el) {
     el.addEventListener('click', function() {
       modal.classList.remove('is-visible');
    });
  });

  modalContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  setTimeout(function() {
    modal.style.display = 'block';
  }, 250);

  $('.goto').click(function(e){
   e.preventDefault();
   $('html').scrollTo(this.hash,this.hash);
  });

  mediaCheck({
    media: '(max-width: 768px)',
    entry: function () {
      $('.make-it-appear-top').waypoint(function (direction) {
        $(this).css('opacity', '1');
      }, {
        offset: '200%'
      });

      $('.make-it-appear-left').waypoint(function (direction) {
        $(this).css('opacity', '1');
      }, {
        offset: '200%'
      });

      $('.make-it-appear-right').waypoint(function (direction) {
        $(this).css('opacity', '1');
      }, {
        offset: '200%'
      });

      $('.make-it-appear-bottom').waypoint(function (direction) {
        $(this).css('opacity', '1');
      }, {
        offset: '200%'
      });
    },
    exit: function () {
      $('.make-it-appear-top').waypoint(function (direction) {
        $(this).addClass('animated fadeInDown');
      }, {
        offset: '80%'
      });

      $('.make-it-appear-left').waypoint(function (direction) {
        $(this).addClass('animated fadeInLeft');
      }, {
        offset: '80%'
      });

      $('.make-it-appear-right').waypoint(function (direction) {
        $(this).addClass('animated fadeInRight');
      }, {
        offset: '80%'
      });

      $('.make-it-appear-bottom').waypoint(function (direction) {
        $(this).addClass('animated fadeInUp');
      }, {
        offset: '80%'
      });

      $('.bounce').waypoint(function (direction) {
        $(this).addClass('animated bounce');
      }, {
        offset: '70%'
      });

      $('.pulse').waypoint(function (direction) {
        $(this).addClass('animated pulse');
      }, {
        offset: '50%'
      });
    }
  });
});

$(window).load(function () {
  jQuery("#loading-animation").fadeOut();
  jQuery("#preloader").delay(600).fadeOut("slow");
});
