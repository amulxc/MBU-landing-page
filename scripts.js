// scripts.js
(function($){
  $(function(){ // document ready

    // ---------- NAV: close mobile menu when a nav link clicked ----------
    $('#mbuMenu .nav-link').on('click', function(){
      $('#mbuMenu').collapse('hide');
    });

    // ---------- NAV: Scroll to hero section when admissions button clicked ----------
    $('#admissionsBtn').on('click', function(e){
      e.preventDefault();
      const heroSection = document.getElementById('heroSection');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    // ---------- HERO BANNER: Scroll to hero section when Apply Now button clicked ----------
    $('#mbuHeroBtn').on('click', function(e){
      e.preventDefault();
      const heroSection = document.getElementById('heroSection');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
 

     const testimonials = [
  
    {
      text: "The placement guidance and industry mentoring helped me secure my dream role with confidence. Leverage agile frameworks to provide a robust synopsis for go for strategy foster.",
      name: "Harshavika",
      role: "B.Tech Student",
      salary: "₹60 LPA",
      studentImage: "image/harshavika.png",
      companyLogo: "image/yugabytedb.webp"
    },
    {
      text: "Hands-on training and continuous placement support made a huge impact on my career growth. Leverage agile frameworks to provide a robust synopsis for go for strategy foster.",
      name: "Vatsalya Polineni",
      role: "B.Tech Student",
      salary: "₹60 LPA",
      studentImage: "image/vastalya.png",
      companyLogo: "image/yugabytedb.webp"
    },
    {
      text: "The comprehensive curriculum and industry exposure prepared me for real-world challenges. The faculty's guidance and placement support were exceptional throughout my journey.",
      name: "Lakshmi Prasanna",
      role: "B.Tech Student",
      salary: "₹45 LPA",
      studentImage: "image/hakeem.png",
      companyLogo: "image/yugabytedb.webp"
    },
    {
      text: "Excellent infrastructure and experienced faculty members helped me achieve my career goals. The placement cell's efforts in connecting us with top companies were remarkable.",
      name: "Pavitra Reddy",
      role: "B.Tech Student",
      salary: "₹44 LPA",
      studentImage: "image/student.webp",
      companyLogo: "image/yugabytedb.webp"
    },
    
  ];

  let index = 0;

  const textEl = document.getElementById("testimonialText");
  const nameEl = document.getElementById("studentName");
  const roleEl = document.getElementById("studentRole");
  const salaryEl = document.getElementById("studentSalary");
  const studentPhotoEl = document.querySelector(".student-photo");
  const companyLogoEl = document.querySelector(".salary-badge img");

  // Only initialize if elements exist
  if (textEl && nameEl && roleEl && salaryEl) {
    const elements = [textEl, nameEl, roleEl, salaryEl];

    elements.forEach(el => {
      if (el) {
        el.classList.add("testimonial-slide");
      }
    });

    function slideTestimonial() {
      // slide out left
      elements.forEach(el => {
        if (el) {
          el.classList.add("slide-out-left");
        }
      });

      // Fade out images
      if (studentPhotoEl) {
        studentPhotoEl.style.opacity = "0";
        studentPhotoEl.style.transition = "opacity 0.3s ease";
      }
      if (companyLogoEl) {
        companyLogoEl.style.opacity = "0";
        companyLogoEl.style.transition = "opacity 0.3s ease";
      }

      setTimeout(() => {
        index = (index + 1) % testimonials.length;

        if (textEl) textEl.textContent = testimonials[index].text;
        if (nameEl) nameEl.textContent = testimonials[index].name;
        if (roleEl) roleEl.textContent = testimonials[index].role;
        if (salaryEl) salaryEl.textContent = testimonials[index].salary;

        // Update images
        if (studentPhotoEl && testimonials[index].studentImage) {
          studentPhotoEl.src = testimonials[index].studentImage;
        }
        if (companyLogoEl && testimonials[index].companyLogo) {
          companyLogoEl.src = testimonials[index].companyLogo;
        }

        // Fade in images
        if (studentPhotoEl) {
          setTimeout(() => {
            studentPhotoEl.style.opacity = "1";
          }, 50);
        }
        if (companyLogoEl) {
          setTimeout(() => {
            companyLogoEl.style.opacity = "1";
          }, 50);
        }

        // move content to right (off-screen)
        elements.forEach(el => {
          if (el) {
            el.classList.remove("slide-out-left");
            el.classList.add("slide-in-right");
          }
        });

        // slide in to center
        requestAnimationFrame(() => {
          elements.forEach(el => {
            if (el) {
              el.classList.remove("slide-in-right");
            }
          });
        });

      }, 600);
    }

    // auto slide every 4 seconds
    setInterval(slideTestimonial, 4000);
  }
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
            $arrow2.css({'background-image':'url("./image/drop2.png")','transform':'rotate(0deg)'});
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
        $arrow.css({'background-image':'url("./image/drop2.png")','transform':'rotate(0deg)'});
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

    // ---------- Logo card hover effect for touch devices ----------
    $('.logo-card').on('touchstart', function(e){
      e.preventDefault();
      $(this).addClass('logo-hover');
    });

    $('.logo-card').on('touchend', function(e){
      var $card = $(this);
      setTimeout(function(){
        $card.removeClass('logo-hover');
      }, 300);
    });

    // Also support click for better compatibility
    $('.logo-card').on('click', function(e){
      $(this).toggleClass('logo-hover');
      var $card = $(this);
      setTimeout(function(){
        $card.removeClass('logo-hover');
      }, 500);
    });

  });
})(jQuery);
