var svgholder = $('body').find("object#usman");

svgholder.load("image/svg+xml", function() {
    alert("some svg loaded");
    let usmanCS = document.getElementById("usman");
    let usman = document.getElementById("usman").contentDocument;
    let projects= usman.getElementById("Torso");
    projects.addEventListener('click', () => {
      console.log("torso is clicked");
      // location.replace("Movie.html");
    });
});


  // let element = document.querySelector(".onesnzeros");

  // element.innerHTML = "01".repeat(5000)