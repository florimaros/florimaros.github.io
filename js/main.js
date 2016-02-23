"use strict"
var resume = document.getElementById("resume")
resume.addEventListener("click", function (event) {
  if (event.target.classList.contains("barmi")) {
    if (event.target.nextElementSibling.style.display==="none") {
      event.target.nextElementSibling.style.display="block"
    }
    else {
      event.target.nextElementSibling.style.display="none"
    }
  }

})
