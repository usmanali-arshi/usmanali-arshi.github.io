// js for personal website
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
     // $(".footer").fadeIn("slow");
     // $(".banner").fadeIn("slow");
  

});

window.onload=() => {
	console.log("its loading");
	alert ("Welcome to Usman's Portfolio! You can learn more about him by interacting with his body. Yes, you have his consent :)");

  	let element = document.querySelector(".onesnzeros");

  	element.innerHTML = "01".repeat(5000);

  
    
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
        location.replace("pages/about.html");
      });
      let lDance = usman.getElementById("LLeg");
      lDance.addEventListener('click', () => {
        console.log("head is clicked");
        // location.replace("pages/about.html");
        alert("Oh Snap! Dance world is under construction. Come back later! ")
      });
      let rDance = usman.getElementById("RLeg");
      rDance.addEventListener('click', () => {
        console.log("head is clicked");
        // location.replace("pages/about.html");
        alert("Oh Snap! Dance world is under construction. Come back later! ")
      });
};
