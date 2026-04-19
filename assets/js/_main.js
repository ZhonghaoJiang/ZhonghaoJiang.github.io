/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  var themeStorageKey = 'site-theme';
  var $root = $(document.documentElement);
  var $themeToggle = $('.theme-toggle');
  var $themeMeta = $('meta[name="theme-color"]');

  function themeMetaColor(theme) {
    return theme === 'dark' ? '#0f0f10' : '#ffffff';
  }

  function themeIcon(theme) {
    return theme === 'dark' ? 'fa-sun' : 'fa-moon';
  }

  function themeLabel(theme) {
    return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function themeToggleText(theme) {
    return theme === 'dark' ? 'Light' : 'Dark';
  }

  function setTheme(theme, persist) {
    $root.attr('data-theme', theme);
    document.documentElement.style.colorScheme = theme;

    if ($themeMeta.length) {
      $themeMeta.attr('content', themeMetaColor(theme));
    }

    $themeToggle.attr('aria-pressed', theme === 'dark' ? 'true' : 'false');
    $themeToggle.attr('aria-label', themeLabel(theme));
    $themeToggle.find('.visually-hidden').text(themeLabel(theme));
    $themeToggle.find('.theme-toggle__label').text(themeToggleText(theme));
    $themeToggle.find('i').removeClass('fa-moon fa-sun').addClass(themeIcon(theme));

    if (persist) {
      try {
        localStorage.setItem(themeStorageKey, theme);
      } catch (e) {}
    }
  }

  setTheme($root.attr('data-theme') === 'dark' ? 'dark' : 'light', false);

  $themeToggle.on('click', function() {
    var nextTheme = $root.attr('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme, true);
  });

  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  
  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
