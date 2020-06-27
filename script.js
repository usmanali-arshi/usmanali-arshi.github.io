// js for personal website

window.onload=() => {
	console.log("its loading");

  let element = document.querySelector(".onesnzeros");

  element.innerHTML = "01".repeat(5000)

  function myFunction(x) {
    if (x.matches) { // If media query matches
      $(document).ready(function(){
  		$("#check").click(function(){
    	setTimeout(function () {
      		$("#usman").toggle();
      		$("#footer").toggle();

    		}, 100);
  		});
	});
      // setTimeout(function () {
      //   let map2 = document.getElementById("map2").contentDocument;

      //   let loc2 = map2.getElementById("button2");
      //   loc2.addEventListener('click', () => {
      //     console.log("Play-Video on Phone is clicked");
      //     location.replace("Movie.html");
      //   });
      // }, 100);
    } else {
      console.log("Laptop")
      let usmanCS = document.getElementById("usman");

      let usman = document.getElementById("usman").contentDocument;
      let projects= usman.getElementById("Torso");
      projects.addEventListener('click', () => {
        console.log("torso is clicked");
        location.replace("pages/projects.html");
      });

      let about = usman.getElementById("Head");
      about.addEventListener('click', () => {
        console.log("head is clicked");
        location.replace("about.html");
      });
    }
  }

  var x = window.matchMedia("(max-width:858px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
};