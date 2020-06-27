// js for personal website

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
      let Ldance = usman.getElementById("LLeg");
      about.addEventListener('click', () => {
        console.log("head is clicked");
        // location.replace("pages/about.html");
        alert("Oh Snap! Dance world is under construction. Come back later! ")
      });
      let Rdance = usman.getElementById("RLeg");
      about.addEventListener('click', () => {
        console.log("head is clicked");
        // location.replace("pages/about.html");
        alert("Oh Snap! Dance world is under construction. Come back later! ")
      });
};
