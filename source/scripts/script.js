(function () {
  var navOpen = document.querySelector(".main-header__nav-open");
  var mobLinks = document.querySelector(".main-header__links-wrap");
  var langNav = document.querySelector(".language");
  var langNavOther = document.querySelector(".language__other");
  var langMain = document.querySelector(".language__main");
  var currentLang = langMain.innerHTML;
  var newLang = langNavOther.innerHTML;

  langNav.addEventListener("click", function(event) {
    event.preventDefault();
    langNav.classList.toggle("language_closed");
    langNav.classList.toggle("language_opened");
    langNavOther.classList.toggle("language__other_closed");
    langNavOther.classList.toggle("language__other_opened");
  });

  langNavOther.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    langNav.classList.remove("language_opened");
    langNav.classList.add("language_closed");
    langNavOther.classList.remove("language__other_opened");
    langNavOther.classList.add("language__other_closed");
    langMain.textContent = newLang;
    langNavOther.textContent = currentLang;
    newLang = currentLang;
    currentLang = langMain.innerHTML;
  });

  navOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mobLinks.classList.toggle("main-header__links-wrap_closed");
    mobLinks.classList.toggle("main-header__links-wrap_opened");
    navOpen.classList.toggle("main-header__nav-open_closed");
    navOpen.classList.toggle("main-header__nav-open_opened");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27 && mobLinks.classList.contains("main-header__links-wrap_opened")) {
      mobLinks.classList.remove("main-header__links-wrap_opened");
      mobLinks.classList.add("main-header__links-wrap_closed");
      navOpen.classList.remove("main-header__nav-open_opened");
      navOpen.classList.add("main-header__nav-open_closed");
    }
  });
})();
