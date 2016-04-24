/*global jQuery, _, List */
(function (win, $) {
  'use strict';

  $(function() {
    // Define page elements
    var $win = $(window);
    var $doc = $(document);
    var $body = $(document.body);
    var $context = $('.context-nav');
    var $footer = $('.SiteFooter');

    var fixedElementOffset = $context.offset().top;
    var footerOffset = $footer.offset().top - 93;
    var fixedElementHeight = $context.height();

    $win.scroll(function (event) {
      var y = $(this).scrollTop();
      if (y < 148) {
        $context.css('top', '1.3em');
      } else {
        $context.css('top', '6em');
      }
      if ( y >= fixedElementOffset && y + fixedElementHeight < footerOffset ) {
        $context.addClass('navbar-fixed').removeClass('navbar-absolute');
        $context.css('top', '6em');
      }
      else if ( y >= fixedElementOffset && y + fixedElementHeight >= footerOffset ) {
        var fixEl = (fixedElementHeight / 2) + fixedElementHeight;
        var newOffset = $footer.offset().top - fixEl;
        $context.removeClass('navbar-fixed').addClass('navbar-absolute');
        $context.css('top', newOffset);
      }
    });

    // Sticky submenu
    (function() {
      var $contentNav = $('.context-nav');
      function resizer () {
        var state = $doc.scrollTop() > 148;
        if (state !== oldState) {
          toggle(state);
        }
      }
      function toggle (state) {
        var rightOffset = (
          $win.outerWidth() - $contentNav.offset().left -
          $contentNav.outerWidth()
        ) + 'px';
        $contentNav
          .toggleClass('navbar-fixed', state)
          .css('right', state ? rightOffset : 0);
        oldState = state;
      }
      if ($contentNav.length) {
        var oldState = null;
        $doc.scroll(resizer).trigger('scroll');
        $win.resize(function() {
          oldState = null;
          resizer();
        });
      }
    })();

    (function() {
      // Open/close mobile menu
      var $pageHeader = $('.page-header');
      var $menu = $('.mobile-menu-toggle');
      var onClick = function (e) {
        var $target = $(e.target);
        if (!$target.is($menu) && !$target.closest('.main-menu').length) {
          $menu.trigger('click.menu');
        }
      };
      $menu.on('click.menu', function () {
        $pageHeader.toggleClass('open');
        if ($pageHeader.hasClass('open')) {
          setTimeout(function () {
            $body.on('click.menu', onClick);
          }, 0);
        } else {
          $body.off('click.menu');
        }
      });
    })();

    // Toggle blog menus
    $('.context-nav, .year_divider').click(function () {
      $(this).toggleClass('open');
    });

    // Beautify code blocks
    $('pre code').addClass('prettyprint');
    window.prettyPrint();
  });
})(window, window.jQuery);
