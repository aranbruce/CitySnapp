  <!--scripts-->
// Show and hide burger menu on Mobile

  function myFunction() {
    document.getElementById("firstSegment").classList.toggle("hide");
    document.getElementById("burger").classList.toggle("burgerContainerClose");
    document.getElementById("burger").classList.toggle("burgerContainer");
    document.getElementById("Menu").classList.toggle("show");
    document.getElementById("Menu").classList.toggle("hide");
    document.getElementById("secondSegment").classList.toggle("hide");
    document.getElementById("thirdSegment").classList.toggle("hide");
    document.getElementById("fourthSegment").classList.toggle("hide")
    document.getElementById("signUp").classList.toggle("hide");
    document.getElementById("footer").classList.toggle("hide");
    document.getElementById("bodyBackground").classList.toggle("menuOpen");
    document.getElementById("firstSegment").classList.toggle("hideBackground");
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
	  if (scroll > 100) {
	    $(".nav").css("background" , "white");
      $(".topNav a").css("color", "black")
	  }

	  else{
      $(".topNav a").css("color" , "white");
      $(".nav").css("background" , "none");

	  }
  })
})
