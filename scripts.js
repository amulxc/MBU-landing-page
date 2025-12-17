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
          var $iconPlus = $btn.find('.icon-plus');
          if ($iconPlus && $iconPlus.length) {
            $iconPlus.removeClass('icon-plus').addClass('icon-minus');
          }
        }
      } else {
        if ($btn && $btn.length) {
          $btn.addClass('collapsed');
          var $iconMinus = $btn.find('.icon-minus');
          if ($iconMinus && $iconMinus.length) {
            $iconMinus.removeClass('icon-minus').addClass('icon-plus');
          }
        }
      }
    });

    $(document).on('show.bs.collapse', '.collapse', function(){
      var $btn = findToggleButtonByCollapse($(this));
      if ($btn && $btn.length) {
        $btn.removeClass('collapsed');
        var $iconPlus = $btn.find('.icon-plus');
        if ($iconPlus && $iconPlus.length) {
          $iconPlus.removeClass('icon-plus').addClass('icon-minus');
        }
      }
    });

    $(document).on('hide.bs.collapse', '.collapse', function(){
      var $btn = findToggleButtonByCollapse($(this));
      if ($btn && $btn.length) {
        $btn.addClass('collapsed');
        var $iconMinus = $btn.find('.icon-minus');
        if ($iconMinus && $iconMinus.length) {
          $iconMinus.removeClass('icon-minus').addClass('icon-plus');
        }
      }
    });
 

     const testimonials = [
  
    {
      text: "At MBU, I found mentors who believed in me even before I believed in myself. Their support and the learning environment made all the difference in my journey.",
      name: "Harshavika",
      role: "B.Tech Student",
      salary: "₹60 LPA",
      studentImage: "image/harshavika.png",
      companyLogo: "image/logo20.png"
    },
    {
      text: "My experience at MBU was truly transformational. Every project, every lab session, and every mentor interaction helped me become industry-ready and confident.",
      name: "Vatsalya Polineni",
      role: "B.Tech Student",
      salary: "₹60 LPA",
      studentImage: "image/vastalya.png",
      companyLogo: "image/logo20.png"
    },
    {
      text: "MBU gave me more than an education — it gave me direction. The placement training and continuous encouragement helped me achieve a milestone I’m truly proud of.",
      name: "Lakshmi Prasanna",
      role: "B.Tech Student",
      salary: "₹45 LPA",
      studentImage: "image/hakeem.png",
      companyLogo: "image/amazon.png"
    },
    {
      text: "MBU taught me how to think, how to solve problems, and how to grow. The opportunities here opened the door to a career I once only dreamed of.",
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
    // ---------- FAQ: button color sync (icons handled by general collapse handler) ----------
    function syncFaqVisuals() {
      $('.faq-accordion .collapse').each(function(){
        var id = $(this).attr('id');
        if (!id) return;
        var $btn = $('[data-target="#'+id+'"], [data-bs-target="#'+id+'"], [aria-controls="'+id+'"]');
        if(!$btn || !$btn.length) return;

        if($(this).hasClass('show')){
          $btn.removeClass('collapsed');
          $btn.css({'background':'#D71921','color':'#fff'});
        } else {
          $btn.addClass('collapsed');
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
      $btn.css({'background':'#D71921','color':'#fff'});
    });

    $(document).on('hide.bs.collapse', '.faq-accordion .collapse', function(){
      var id = $(this).attr('id');
      if (!id) return;
      var $btn = $('[data-target="#'+id+'"], [data-bs-target="#'+id+'"], [aria-controls="'+id+'"]');
      if (!$btn || !$btn.length) return;
      $btn.addClass('collapsed');
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

    // ---------- Rankings Marquee Manual Navigation with Auto-Scroll ----------
    (function() {
      const track = document.getElementById('rankingsTrack');
      const prevBtn = document.getElementById('rankingsPrev');
      const nextBtn = document.getElementById('rankingsNext');
      const container = track ? track.closest('.marquee-container') : null;
      
      if (!track || !prevBtn || !nextBtn) return;
      
      const images = track.querySelectorAll('.rank-icon');
      if (images.length === 0) return;
      
      const gap = 14; // gap between images
      let currentTranslate = 0;
      let autoScrollInterval = null;
      let isPaused = false;
      const autoScrollDelay = 3000; // 3 seconds between auto-scrolls
      const pauseResumeDelay = 5000; // Resume auto-scroll after 5 seconds of inactivity
      let pauseTimeout = null;
      
      function getImageWidth() {
        // Get actual computed width of first image
        if (images.length > 0) {
          const firstImg = images[0];
          const style = window.getComputedStyle(firstImg);
          return parseFloat(style.width) || (window.innerWidth <= 768 ? 95 : 240);
        }
        return window.innerWidth <= 768 ? 95 : 240;
      }
      
      function calculateNavigation() {
        const imageWidth = getImageWidth();
        const itemWidth = imageWidth + gap;
        const containerWidth = track.parentElement.offsetWidth;
        const visibleItems = Math.max(1, Math.floor(containerWidth / itemWidth));
        const maxTranslate = Math.max(0, (images.length - visibleItems) * itemWidth);
        return { itemWidth, visibleItems, maxTranslate };
      }
      
      function updateButtons() {
        const { maxTranslate } = calculateNavigation();
        prevBtn.disabled = currentTranslate <= 0;
        nextBtn.disabled = currentTranslate >= maxTranslate;
      }
      
      function moveTrack() {
        track.style.transform = `translateX(-${currentTranslate}px)`;
        updateButtons();
      }
      
      function autoScroll() {
        if (isPaused) return;
        
        const { itemWidth, visibleItems, maxTranslate } = calculateNavigation();
        
        if (currentTranslate >= maxTranslate) {
          // Loop back to start
          currentTranslate = 0;
        } else {
          // Move forward by one item
          currentTranslate = Math.min(maxTranslate, currentTranslate + itemWidth);
        }
        
        moveTrack();
      }
      
      function startAutoScroll() {
        if (autoScrollInterval) return;
        autoScrollInterval = setInterval(autoScroll, autoScrollDelay);
      }
      
      function stopAutoScroll() {
        if (autoScrollInterval) {
          clearInterval(autoScrollInterval);
          autoScrollInterval = null;
        }
      }
      
      function pauseAutoScroll() {
        isPaused = true;
        stopAutoScroll();
        
        // Clear any existing resume timeout
        if (pauseTimeout) {
          clearTimeout(pauseTimeout);
        }
      }
      
      function resumeAutoScroll() {
        isPaused = false;
        startAutoScroll();
      }
      
      function pauseAndResume() {
        pauseAutoScroll();
        
        // Resume after delay
        pauseTimeout = setTimeout(function() {
          resumeAutoScroll();
        }, pauseResumeDelay);
      }
      
      prevBtn.addEventListener('click', function() {
        const { itemWidth, visibleItems, maxTranslate } = calculateNavigation();
        if (currentTranslate > 0) {
          currentTranslate = Math.max(0, currentTranslate - itemWidth * visibleItems);
          moveTrack();
        }
        pauseAndResume();
      });
      
      nextBtn.addEventListener('click', function() {
        const { itemWidth, visibleItems, maxTranslate } = calculateNavigation();
        if (currentTranslate < maxTranslate) {
          currentTranslate = Math.min(maxTranslate, currentTranslate + itemWidth * visibleItems);
          moveTrack();
        }
        pauseAndResume();
      });
      
      // Pause on hover, resume on mouse leave
      if (container) {
        container.addEventListener('mouseenter', pauseAutoScroll);
        container.addEventListener('mouseleave', resumeAutoScroll);
      }
      
      // Initialize buttons on load and resize
      function initNavigation() {
        const { maxTranslate } = calculateNavigation();
        currentTranslate = Math.min(currentTranslate, maxTranslate);
        moveTrack();
      }
      
      window.addEventListener('resize', function() {
        initNavigation();
        // Restart auto-scroll after resize
        stopAutoScroll();
        setTimeout(startAutoScroll, 1000);
      });
      
      // Small delay to ensure DOM is fully rendered, then start auto-scroll
      setTimeout(function() {
        initNavigation();
        startAutoScroll();
      }, 100);
    })();

  });
})(jQuery);
