/**
 * Legend Coffee - Interactive Scripts
 * "Vintage Meets Modern" Theme
 * 
 * This file handles all interactive functionality:
 * - Navigation scroll effects
 * - Mobile menu toggle
 * - Menu category filters
 * - Testimonial slider
 * - Reveal animations on scroll
 * - Smooth scrolling
 * - Parallax effects
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });

  function initializeApp() {
    initNavigation();
    initMobileMenu();
    initRevealAnimations();
    initMenuFilters();
    initTestimonialSlider();
    initSmoothScroll();
    initParallaxEffect();
    initScrollProgress();
    
    // Log initialization
    console.log('%c☕ Legend Coffee', 'font-size: 20px; color: #A67C52; font-weight: bold;');
    console.log('%c"Vintage Meets Modern" - Website initialized!', 'color: #666;');
  }

  // ============================================
  // NAVIGATION
  // ============================================
  
  function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = function() {
      const scrollY = window.scrollY || window.pageYOffset;
      
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    // Add scroll listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;

    let isOpen = false;

    menuBtn.addEventListener('click', function() {
      isOpen = !isOpen;
      
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Close menu on link click
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        isOpen = false;
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && isOpen) {
        isOpen = false;
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // REVEAL ANIMATIONS ON SCROLL
  // ============================================
  
  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================
  // MENU CATEGORY FILTERS
  // ============================================
  
  function initMenuFilters() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('#menu-grid .menu-card');
    
    if (tabBtns.length === 0 || menuCards.length === 0) return;

    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update tab button styles
        tabBtns.forEach(function(b) {
          b.classList.remove('tab-active');
          b.classList.add('bg-charcoal/5', 'text-charcoal/70');
        });
        
        this.classList.add('tab-active');
        this.classList.remove('bg-charcoal/5', 'text-charcoal/70');
        
        // Filter menu cards
        menuCards.forEach(function(card) {
          const cardCategory = card.dataset.category;
          
          if (category === 'all' || cardCategory === category) {
            // Show card with animation
            card.style.display = 'block';
            
            // Trigger reflow for animation
            void card.offsetWidth;
            
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          } else {
            // Hide card with animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(function() {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ============================================
  // TESTIMONIAL SLIDER
  // ============================================
  
  function initTestimonialSlider() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    
    if (!track || !dots.length || !prevBtn || !nextBtn) return;

    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoSlideInterval;

    function updateSlider() {
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      
      dots.forEach(function(dot, index) {
        if (index === currentSlide) {
          dot.classList.remove('bg-charcoal/30');
          dot.classList.add('bg-wood');
        } else {
          dot.classList.remove('bg-wood');
          dot.classList.add('bg-charcoal/30');
        }
      });
    }

    function goToSlide(n) {
      currentSlide = n;
      if (currentSlide < 0) currentSlide = totalSlides - 1;
      if (currentSlide >= totalSlides) currentSlide = 0;
      updateSlider();
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(function() {
        goToSlide(currentSlide + 1);
      }, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    // Previous button
    prevBtn.addEventListener('click', function() {
      goToSlide(currentSlide - 1);
      startAutoSlide();
    });

    // Next button
    nextBtn.addEventListener('click', function() {
      goToSlide(currentSlide + 1);
      startAutoSlide();
    });

    // Dot navigation
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        goToSlide(index);
        startAutoSlide();
      });
    });

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoSlide();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchStartX - touchEndX;
      const threshold = 50;
      
      if (diff > threshold) {
        // Swipe left - next slide
        goToSlide(currentSlide + 1);
      } else if (diff < -threshold) {
        // Swipe right - previous slide
        goToSlide(currentSlide - 1);
      }
    }

    // Start auto slide
    startAutoSlide();
    
    // Initial update
    updateSlider();
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        
        if (target) {
          const NAV_HEIGHT = 80;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without reload
          history.pushState(null, null, href);
        }
      });
    });
  }

  // ============================================
  // PARALLAX EFFECT
  // ============================================
  
  function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-bg, [data-parallax]');
    
    if (parallaxElements.length === 0) return;

    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrollY = window.scrollY || window.pageYOffset;
          
          parallaxElements.forEach(function(el) {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            el.style.backgroundPositionY = (scrollY * speed) + 'px';
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // SCROLL PROGRESS BAR
  // ============================================
  
  function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-wood z-[100] transition-all duration-150';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // ============================================
  // ADDITIONAL INTERACTIONS
  // ============================================

  // Add hover effects to menu cards (for desktop)
  function addMenuCardInteractions() {
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
      });
    });
  }

  // Lazy load images (if needed)
  function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

})();