// js for personal website

window.onload=() => {
	console.log("its loading");

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
        location.replace("about.html");
      });
};
