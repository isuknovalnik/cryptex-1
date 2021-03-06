(function () {
  var scroll = new SmoothScroll();
  var options = { speed: 1000, easing: 'easeOutCubic' };

  var smoothScrollWithoutHash = function (selector, settings) {
    var clickHandler = function (event) {
      var toggle = event.target.closest( selector );
      if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
      var anchor = document.querySelector( toggle.hash );
      if ( !anchor ) return;
      event.preventDefault();
      scroll.animateScroll( anchor, toggle, settings || {} ); 
    };
    window.addEventListener('click', clickHandler, false );
  };

  smoothScrollWithoutHash( 'a[href*="#"]' );
})();
