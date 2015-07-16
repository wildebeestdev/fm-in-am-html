(function() {

  var s = Snap('#hamburgerMenu');
  var navMenu = document.getElementById('mobileNav');
  var headerBar = document.getElementById('headerBar');
  var hamburgerSelected = false;

  navMenu.style.visibility = "hidden";
  navMenu.style.opacity = "0";

  // toggles hamburger menu on click
  s.click(function() {
    if (hamburgerSelected === false) {
      s.select("path:nth-child(1)").animate({path: "M 12.972944,50.936147 51.027056,12.882035"}, 500);
      s.select("path:nth-child(2)").animate({opacity: 0}, 500);
      s.select("path:nth-child(3)").animate({path: "M 12.972944,12.882035 51.027056,50.936147"}, 500);
      hamburgerSelected = true;
      headerBar.style.zIndex = "initial";
      navMenu.style.visibility= "visible";
      navMenu.style.opacity = "1";
    }

    else {
      s.select("path:nth-child(1)").animate({path: "m 5.0916789,20.818994 53.8166421,0"}, 500);
      s.select("path:nth-child(2)").animate({opacity: 1}, 500);
      s.select("path:nth-child(3)").animate({path: "m 5.0916788,42.95698 53.8166422,0"}, 500);
      hamburgerSelected = false;
      headerBar.style.zIndex = "3";
      navMenu.style.visibility = "hidden";
      navMenu.style.opacity = "0";
    }
  });

  // creates sticky headerbar
  $("#headerBar").sticky({
    responsiveWidth: true
  });

})();

