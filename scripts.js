// scripts.js
(function($){
  $(function(){ // document ready

    // ---------- NAV: close mobile menu when a nav link clicked ----------
    $('#mbuMenu .nav-link').on('click', function(){
      $('#mbuMenu').collapse('hide');
    });

    // fallback toggler (keeps behavior consistent)
    $('.navbar-toggler').on('click', function(){
      $('#mbuMenu').collapse('toggle');
    });

    // ---------- Keep Program/FAQ accordion icons in sync ----------
    function findToggleButtonByCollapse($collapse) {
      var id = $collapse.attr('id');
      if (!id) return $();
      return $('[data-target="#'+id+'"], [data-bs-target="#'+id+'"], [aria-controls="'+id+'"]');
    }

    $('.collapse').each(function(){
      var $c = $(this);
      var $btn = findToggleButtonByCollapse($c);

      if($c.hasClass('show')){
        if ($btn && $btn.length) {
          $btn.removeClass('collapsed');
          var $iconMinus = $btn.find('.icon-minus');
          if ($iconMinus && $iconMinus.length) {
            $iconMinus.removeClass('icon-minus').addClass('icon-plus');
          }
        }
      } else {
        if ($btn && $btn.length) {
          $btn.addClass('collapsed');
          var $iconPlus = $btn.find('.icon-plus');
          if ($iconPlus && $iconPlus.length) {
            $iconPlus.removeClass('icon-plus').addClass('icon-minus');
          }
        }
      }
    });

    $(document).on('show.bs.collapse', '.collapse', function(){
      var $btn = findToggleButtonByCollapse($(this));
      if ($btn && $btn.length) {
        $btn.removeClass('collapsed');
        var $iconMinus = $btn.find('.icon-minus');
        if ($iconMinus && $iconMinus.length) {
          $iconMinus.removeClass('icon-minus').addClass('icon-plus');
        }
      }
    });

    $(document).on('hide.bs.collapse', '.collapse', function(){
      var $btn = findToggleButtonByCollapse($(this));
      if ($btn && $btn.length) {
        $btn.addClass('collapsed');
        var $iconPlus = $btn.find('.icon-plus');
        if ($iconPlus && $iconPlus.length) {
          $iconPlus.removeClass('icon-plus').addClass('icon-minus');
        }
      }
    });

    // ---------- FAQ: arrow image + button color sync ----------
    function syncFaqVisuals() {
      $('.faq-accordion .collapse').each(function(){
        var id = $(this).attr('id');
        if (!id) return;
        var $btn = $('[data-target="#'+id+'"], [data-bs-target="#'+id+'"], [aria-controls="'+id+'"]');
        if(!$btn || !$btn.length) return;

        if($(this).hasClass('show')){
          $btn.removeClass('collapsed');
          var $arrow = $btn.find('.faq-arrow');
          if ($arrow && $arrow.length) {
            $arrow.css({'background-image':'url("./image/drop1.webp")','transform':'rotate(180deg)'});
          }
          $btn.css({'background':'#D71921','color':'#fff'});
        } else {
          $btn.addClass('collapsed');
          var $arrow2 = $btn.find('.faq-arrow');
          if ($arrow2 && $arrow2.length) {
            $arrow2.css({'background-image':'url("./image/drop2.webp")','transform':'rotate(0deg)'});
          }
          $btn.css({'background':'#F6C617','color':'#000'});
        }
      });
    }

    // run on load
    syncFaqVisuals();

    // update when show/hide fires for FAQ items
    $(document).on('show.bs.collapse', '.faq-accordion .collapse', function(){
      var id = $(this).attr('id');
      if (!id) return;
      var $btn = $('[data-target="#'+id+'"], [data-bs-target="#'+id+'"], [aria-controls="'+id+'"]');
      if (!$btn || !$btn.length) return;
      $btn.removeClass('collapsed');
      var $arrow = $btn.find('.faq-arrow');
      if ($arrow && $arrow.length) {
        $arrow.css({'background-image':'url("./image/drop1.webp")','transform':'rotate(180deg)'});
      }
      $btn.css({'background':'#D71921','color':'#fff'});
    });

    $(document).on('hide.bs.collapse', '.faq-accordion .collapse', function(){
      var id = $(this).attr('id');
      if (!id) return;
      var $btn = $('[data-target="#'+id+'"], [data-bs-target="#'+id+'"], [aria-controls="'+id+'"]');
      if (!$btn || !$btn.length) return;
      $btn.addClass('collapsed');
      var $arrow = $btn.find('.faq-arrow');
      if ($arrow && $arrow.length) {
        $arrow.css({'background-image':'url("./image/drop2.webp")','transform':'rotate(0deg)'});
      }
      $btn.css({'background':'#F6C617','color':'#000'});
    });

    // ---------- Optional: click-to-toggle for buttons without data-toggle ----------
    $('.accordion-button').on('click', function(e){
      var target = $(this).attr('data-target') || $(this).attr('data-bs-target');
      if(!target){
        var id = $(this).attr('aria-controls');
        if(id) target = '#'+id;
      }
      if(target){
        try {
          $(target).collapse('toggle');
        } catch (err) {
          // ignore
        }
      }
    });

  });
})(jQuery);
