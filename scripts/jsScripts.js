  <!--scripts-->
// Show and hide burger menu on Mobile

  function openCloseMenu() {
    //hide mobile menu when it is closed
    document.getElementById("Menu").classList.toggle("hide");

    //show mobile menu when it is open
    document.getElementById("Menu").classList.toggle("show");

    //Change burger to 'x'
    document.getElementById("burger").classList.toggle("burgerContainerClose");

    //hide elemensts when burger is open
    var hiddenOnOpenMenu = document.getElementsByClassName("hiddenOnOpenMenu")
    for (var i = 0; i < hiddenOnOpenMenu.length; i++) {
      hiddenOnOpenMenu[i].classList.toggle("hide")
      }

    //Change background when mobile menu is open
    document.getElementById("bodyBackground").classList.toggle("menuOpen");
  }

 //Smooth Scrolling for links
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if
    });
  });


  // Change nav background on scroll

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 80) {
	    $("g#Homepage").css("fill" , "#4A4A4A");
      $(".topNav a").css("color", "#4A4A4A");
      $(".bar1").css("background-color", "#4A4A4A");
      $(".bar2").css("background-color", "#4A4A4A");
      $(".bar3").css("background-color", "#4A4A4A");
      $(".nav").css("background", "white");
      $(".nav").css("box-shadow", "0 5px 10px rgba(155, 155, 155, 0.5)");
	  }

	  else{
      $("g#Homepage").css("fill" , "white");
      $(".topNav a").css("color" , "white");
      $(".bar1").css("background-color", "white");
      $(".bar2").css("background-color", "white");
      $(".bar3").css("background-color", "white");
      $(".nav").css("background", "none");
      $(".nav").css("box-shadow", "none");
	  }
  })
})
